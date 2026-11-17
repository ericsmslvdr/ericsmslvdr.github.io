import { otherSocials } from "@/data/socials";
import Icon from "@/components/ui/Icon";
import { Card, CardContent } from "@/components/ui/card";

function OtherSocials() {
    return (
        <div className="mt-6 flex flex-col gap-4">
            {otherSocials.map((social) => (
                <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name} aria-label={social.name}>
                    <Card className="group transition-colors hover:bg-accent dark:hover:bg-[#172033]">
                        <CardContent className="flex items-center gap-2 py-2">
                            <Icon src={social.icon} alt="" />
                            <span className="text-center text-sm text-card-foreground group-hover:text-accent-foreground">{social.name}</span>
                        </CardContent>
                    </Card>
                </a>
            ))}
        </div>
    );
}

export default OtherSocials;