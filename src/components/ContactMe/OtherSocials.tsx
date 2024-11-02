import { otherSocials } from "@/data/socials";
import Icon from "../ui/Icon";

function OtherSocials() {
    return (
        <div className="mt-6 flex flex-col gap-4">
            {otherSocials.map((social, index) => (
                < a href={social.link} target="_blank" key={index}>
                    <div className="flex gap-2 items-center border border-neutral-300 dark:border-neutral-700 rounded-lg py-2 px-4 hover:bg-neutral-400/10 dark:hover:bg-neutral-950 group">
                        <Icon src={social.icon} alt={social.alt} />
                        <h2 className="text-center text-lightSecondaryText dark:text-darkSecondaryText text-sm group-hover:text-link">{social.name}</h2>
                    </div>
                </a >
            ))}
        </div>
    );
}

export default OtherSocials;