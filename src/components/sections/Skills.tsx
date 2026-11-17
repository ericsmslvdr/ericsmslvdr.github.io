import { useCallback, useState } from "react";
import { useMenu } from "@/contexts/useMenu";
import { technologies } from "@/data/technologies";
import { skillsContent } from "@/data/skills";
import Icon from "@/components/ui/Icon";
import TechnologyPhysics from "@/components/sections/TechnologyPhysics";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
    const { skillsRef } = useMenu();
    const [movingIcons, setMovingIcons] = useState<Set<string>>(() => new Set());
    const updateMovingIcons = useCallback((names: Set<string>) => setMovingIcons(names), []);

    const launchIcon = (event: React.MouseEvent<HTMLButtonElement>, tech: typeof technologies[number]) => {
        const iconAnchor = event.currentTarget.querySelector<HTMLElement>("[data-icon-anchor]");
        const origin = iconAnchor?.getBoundingClientRect() ?? event.currentTarget.getBoundingClientRect();
        window.dispatchEvent(new CustomEvent("technology-icon-launch", {
            detail: { name: tech.name, icon: tech.icon, origin },
        }));
    };

    return (
        <section ref={skillsRef} className="mx-auto flex max-w-container flex-col px-8 pt-8 md:px-0">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{skillsContent.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{skillsContent.description}</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {technologies.map((tech) => {
                    const isMoving = movingIcons.has(tech.name);
                    return (
                        <Card key={tech.name} size="sm" className="hover:bg-accent/60 dark:hover:bg-[#172033]">
                            <CardContent className="py-2">
                                <button
                                    type="button"
                                    aria-label={`${isMoving ? "Restore" : "Launch"} ${tech.name} icon`}
                                    aria-pressed={isMoving}
                                    title={isMoving ? "Icon is moving; reset to restore" : `Click to launch ${tech.name}`}
                                    disabled={isMoving}
                                    onClick={(event) => launchIcon(event, tech)}
                                    className="flex min-h-8 w-full items-center justify-between gap-4 rounded text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-default"
                                >
                                    {isMoving
                                        ? <span data-icon-anchor aria-hidden="true" className="h-8 w-8 shrink-0" />
                                        : <span data-icon-anchor className="flex h-8 w-8 shrink-0 items-center justify-center"><Icon src={tech.icon} alt="" /></span>}
                                    <span className="flex-1 text-center text-sm font-medium text-card-foreground">{tech.name}</span>
                                </button>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
            <TechnologyPhysics onActiveChange={updateMovingIcons} />
        </section>
    );
}

export default Skills;
