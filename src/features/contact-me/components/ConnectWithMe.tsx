const ConnectWithMe = () => {

    const otherMeansOfCommunication = [
        {
            name: "Gmail",
            link: "mailto:ericsmsalvador@gmail.com",
            icon: <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" className="h-6 w-6" alt="" />
        },
        {
            name: "Discord",
            link: "https://discordapp.com/users/ctrlcccv",
            icon: <img src="https://img.icons8.com/?size=100&id=SAZw8WuWnQea&format=png&color=000000" className="h-6 w-6" alt="" />
        },
        {
            name: "Messenger",
            link: "https://m.me/ericsmslvdr",
            icon: <img src="https://img.icons8.com/?size=100&id=YFbzdUk7Q3F8&format=png&color=000000" className="h-6 w-6" alt="" />
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/ericsmsalvador/",
            icon: <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="h-6 w-6" alt="" />
        },
    ]

    return (
        <div className="mt-6 flex flex-col gap-4">
            {otherMeansOfCommunication.map((comm, index) => (
                < a href={comm.link} target="_blank" key={index}>
                    <div className="flex gap-2 items-center border border-neutral-300 dark:border-neutral-700 rounded-lg py-2 px-4 hover:bg-neutral-400/10 dark:hover:bg-neutral-950 group">
                        {comm.icon}
                        <h2 className="text-center text-lightSecondaryText dark:text-darkSecondaryText text-sm group-hover:text-link">{comm.name}</h2>
                    </div>
                </a >
            ))}
        </div>
    )
}

export default ConnectWithMe;