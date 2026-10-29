export const Experiences = [
    {
        companyName: "Aiimi",
        jobTitle: "Software Developer",
        startDate: new Date("2026-06-01"),
        endDate: new Date("2026-10-01"),
        isCurrent: false,
        logo: "/src/assets/logos/AIIMI-logo.png",
        darkLogo: "/src/assets/logos/AIIMI-logo.png",
        stackTags: [
            "Javascript",
            "Typescript",
            "C#",
            ".NET Core",
            "Angular",
            "Elastic"
        ],
        content:
        {
            breif: `I worked on the flagship product named WorkplaceAI. The role was focused on
            front-end development, creating reusable and appealing components using Angular 21.
            I also implemented new API endpoints to provide optamised database requests to the user.`,
            achievements: [
                `Improved existing queries to be better optamised allowing for a snappier user experience.`,
                `Improved the content-security-policy to be compliant with modern security standards.`,
                `Produced maintainable and scenario driven end-to-end tests used in the pipeline to
                ensure production ready delivery of the software.`
            ],
        }
    },
    {
        companyName: "Symology",
        jobTitle: "Senior Software Developer",
        startDate: new Date("2019-08-01"),
        endDate: new Date("2026-06-01"),
        isCurrent: false,
        logo: "/src/assets/logos/Symology-Logo.png",
        darkLogo: "/src/assets/logos/Symology-Logo.png",
        stackTags: [
            "Javascript",
            "Typescript",
            "C#",
            "ASP .NET",
            "Razor",
            "MS SQL",
            "JMeter",
            "MAUI"
        ],
        content:
        {
            breif: `The project I work on is called Aurora and is a .NET web solution for
            managing government assets. The solution must cover the needs of many clients some
            with overlapping requirements. The application manages contractors, resources and
            the costs of work.`,
            achievements: [
                `Optamising LINQ statements to improve the effiency of database queries using SQL profiler to find sore spots.`,
                `Wrote critical migration scripts necessary for data integrity and sycronisation between the schema and API logical assertions.`,
                `Delivered a companion mobile app, which integrates with the web app.`,
                `Found many critical bugs, wrote up backlog bugs in DevOps and divided them to team members
                to experdite patches to customers.`,
                `Implemented unit tests to cover a range on finge cases which has prevented bug loaded
                deployments to customers.`
            ],
        }
    },
];