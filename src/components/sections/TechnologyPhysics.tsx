import { useEffect, useRef, useState } from "react";
import * as Matter from "matter-js";

type LaunchDetail = {
    name: string;
    icon: string;
    origin: DOMRect;
};

type MovingIcon = {
    body: Matter.Body;
    image: HTMLImageElement;
    name: string;
    behavior: "fall" | "drift";
};

type LaunchEvent = CustomEvent<LaunchDetail>;

const ICON_SIZE = 40;
const WALL_THICKNESS = 100;

function TechnologyPhysics({ onActiveChange }: { onActiveChange: (names: Set<string>) => void }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [active, setActive] = useState(false);
    const [paused, setPaused] = useState(false);
    const [status, setStatus] = useState("");

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;

        const engine = Matter.Engine.create({
            gravity: { x: 0, y: 1, scale: 0.001 },
        });
        const movingIcons = new Map<number, MovingIcon>();
        let walls: Matter.Body[] = [];
        let animationFrame = 0;
        let isPaused = false;
        let pixelRatio = window.devicePixelRatio || 1;

        const resize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            pixelRatio = window.devicePixelRatio || 1;
            canvas.width = Math.round(width * pixelRatio);
            canvas.height = Math.round(height * pixelRatio);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

            walls.forEach((wall) => Matter.Composite.remove(engine.world, wall));
            walls = [
                Matter.Bodies.rectangle(width / 2, height + WALL_THICKNESS / 2, width + WALL_THICKNESS * 2, WALL_THICKNESS, { isStatic: true }),
                Matter.Bodies.rectangle(-WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height + WALL_THICKNESS * 2, { isStatic: true }),
                Matter.Bodies.rectangle(width + WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height + WALL_THICKNESS * 2, { isStatic: true }),
                Matter.Bodies.rectangle(width / 2, -WALL_THICKNESS / 2, width + WALL_THICKNESS * 2, WALL_THICKNESS, { isStatic: true }),
            ];
            Matter.Composite.add(engine.world, walls);

            // Keep objects in bounds after a viewport resize.
            for (const { body } of movingIcons.values()) {
                Matter.Body.setPosition(body, {
                    x: Math.max(ICON_SIZE / 2, Math.min(width - ICON_SIZE / 2, body.position.x)),
                    y: Math.max(ICON_SIZE / 2, Math.min(height - ICON_SIZE / 2, body.position.y)),
                });
            }
        };

        const draw = () => {
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (const { body, image } of movingIcons.values()) {
                // SVG icons may still be loading on the first animation frame.
                if (!image.complete || image.naturalWidth === 0) continue;
                context.save();
                context.translate(body.position.x, body.position.y);
                context.rotate(body.angle);
                context.shadowColor = "rgba(0, 0, 0, 0.18)";
                context.shadowBlur = 8;
                context.drawImage(image, -ICON_SIZE / 2, -ICON_SIZE / 2, ICON_SIZE, ICON_SIZE);
                context.restore();
            }
        };

        const tick = () => {
            if (!isPaused) {
                Matter.Engine.update(engine, 1000 / 60);
                for (const { body, behavior } of movingIcons.values()) {
                    if (behavior === "drift") {
                        Matter.Body.applyForce(body, body.position, {
                            x: 0,
                            y: -engine.gravity.y * engine.gravity.scale * body.mass,
                        });
                    }
                }
                draw();
            }
            animationFrame = window.requestAnimationFrame(tick);
        };

        const updateActive = () => {
            const names = new Set(Array.from(movingIcons.values(), ({ name }) => name));
            onActiveChange(names);
            setActive(names.size > 0);
        };

        const reset = () => {
            for (const { body } of movingIcons.values()) Matter.Composite.remove(engine.world, body);
            movingIcons.clear();
            setStatus("All technology icons restored.");
            updateActive();
        };

        const handlePause = (event: Event) => {
            isPaused = (event as CustomEvent<boolean>).detail;
        };

        const launch = (event: Event) => {
            const { name, icon, origin } = (event as LaunchEvent).detail;
            if (Array.from(movingIcons.values()).some((item) => item.name === name)) return;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                setStatus("Animation is off because reduced motion is enabled.");
                return;
            }

            const behavior = Math.random() < 0.5 ? "fall" : "drift";
            const body = Matter.Bodies.rectangle(origin.left + origin.width / 2, origin.top + origin.height / 2, ICON_SIZE, ICON_SIZE, {
                restitution: behavior === "drift" ? 0.98 : 0.25,
                friction: behavior === "drift" ? 0 : 0.8,
                frictionAir: behavior === "drift" ? 0 : 0.025,
                density: 0.001,
                chamfer: { radius: 8 },
            });
            const image = new Image();
            image.src = icon;

            Matter.Composite.add(engine.world, body);
            if (behavior === "drift") {
                Matter.Body.setVelocity(body, {
                    x: (Math.random() - 0.5) * 8 || 3,
                    y: (Math.random() - 0.5) * 8 || -3,
                });
                Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.12);
            } else {
                Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 2, y: 0 });
            }
            movingIcons.set(body.id, { body, image, name, behavior });
            setStatus(`${name} icon is ${behavior === "fall" ? "falling into the pile" : "drifting around the screen"}.`);
            updateActive();
        };

        const handleMovingIconClick = (event: PointerEvent) => {
            if (movingIcons.size === 0) return;

            const point = { x: event.clientX, y: event.clientY };
            const hitBodies = Matter.Query.point(
                Array.from(movingIcons.values(), ({ body }) => body),
                point,
            );
            if (hitBodies.length === 0) return;

            // If icons overlap, toggle the one visually nearest the pointer.
            const hitBody = hitBodies.reduce((nearest, candidate) => {
                const nearestDistance = Matter.Vector.magnitudeSquared(Matter.Vector.sub(nearest.position, point));
                const candidateDistance = Matter.Vector.magnitudeSquared(Matter.Vector.sub(candidate.position, point));
                return candidateDistance < nearestDistance ? candidate : nearest;
            });
            const item = movingIcons.get(hitBody.id);
            if (!item) return;

            event.preventDefault();
            event.stopPropagation();
            item.behavior = item.behavior === "drift" ? "fall" : "drift";
            if (item.behavior === "drift") {
                item.body.restitution = 0.98;
                item.body.friction = 0;
                item.body.frictionAir = 0;
                Matter.Body.setVelocity(item.body, {
                    x: (Math.random() - 0.5) * 8 || 3,
                    y: (Math.random() - 0.5) * 8 || -3,
                });
                Matter.Body.setAngularVelocity(item.body, (Math.random() - 0.5) * 0.12);
            } else {
                item.body.restitution = 0.25;
                item.body.friction = 0.8;
                item.body.frictionAir = 0.025;
                Matter.Body.setVelocity(item.body, {
                    x: item.body.velocity.x * 0.35,
                    y: Math.max(2, Math.abs(item.body.velocity.y)),
                });
            }
            setStatus(`${item.name} icon is now ${item.behavior === "fall" ? "falling" : "drifting"}.`);
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && movingIcons.size > 0) reset();
        };

        window.addEventListener("resize", resize);
        window.addEventListener("technology-icon-launch", launch);
        window.addEventListener("technology-physics-pause", handlePause);
        window.addEventListener("technology-physics-reset", reset);
        window.addEventListener("pointerdown", handleMovingIconClick, true);
        window.addEventListener("keydown", handleKeyDown);
        resize();
        animationFrame = window.requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("technology-icon-launch", launch);
            window.removeEventListener("technology-physics-pause", handlePause);
            window.removeEventListener("technology-physics-reset", reset);
            window.removeEventListener("pointerdown", handleMovingIconClick, true);
            window.removeEventListener("keydown", handleKeyDown);
            window.cancelAnimationFrame(animationFrame);
            Matter.Engine.clear(engine);
            movingIcons.clear();
        };
    }, [onActiveChange]);

    const togglePause = () => {
        const nextPaused = !paused;
        setPaused(nextPaused);
        window.dispatchEvent(new CustomEvent("technology-physics-pause", { detail: nextPaused }));
        setStatus(nextPaused ? "Animation paused." : "Animation resumed.");
    };

    const reset = () => window.dispatchEvent(new Event("technology-physics-reset"));

    return (
        <>
            <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-40" />
            <p className="sr-only" aria-live="polite">{status}</p>
            {active && (
                <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg border bg-background/95 p-2 shadow-lg backdrop-blur">
                    <button type="button" onClick={togglePause} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring">
                        {paused ? "Resume" : "Pause"}
                    </button>
                    <button type="button" onClick={reset} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring">
                        Reset icons
                    </button>
                </div>
            )}
        </>
    );
}

export default TechnologyPhysics;
