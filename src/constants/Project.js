export const Projects = [
    {
        title: "Employee Manager",
        sections: [
            {
                title: "Overview",
                content: `The aim of Employee manager is to allow a user to interact with a general search bar and select
                employees, adding them to a grid collection which then allows a user to amend their information. It also
                 includes a feature to add new employee and delete employees. The functionality is simplistic and if meant
                  as a strong example of Angular frontend conventions working with a well rounded REST API implemented using 
                  .NET Core.`
            },
            {
                title: "Technical Stack",
                content: `The frontend uses Angular 21 with Google's Agular Materials component library. The backend uses 
                RESTful API using .NET Core 10 framework and Entity Framework Core linked to a SQLite database. It is completely 
                possible to rig the database conection to a hosted database such as a MySQL or MS SQL.`
            },
            {
                title: "Extensions",
                content: `No project is perfect and there are improvements that would refine the project. The frontend needs to inturet 
                the API error message allowing for dynamic error displays to the user. The whole project needs unit testing to demonstate 
                what the industry standards are for maintaining code. Adding in a microservice for security and having a permissions based 
                functionality. For example admins can add, update and remove where as general users can only view and possible not see personal 
                data like address.`
            },
        ],
        images: [
            {
                label: "Landing Page",
                src: "/src/assets/img/projects/EmployeeManager/Landing-page.png",
            },
            {
                label: "Skills Page",
                src: "/src/assets/img/projects/EmployeeManager/Name-Search.png",
            },
            {
                label: "Education Page",
                src: "/src/assets/img/projects/EmployeeManager/Employee-Added.png",
            },
            {
                label: "Experience Page",
                src: "/src/assets/img/projects/EmployeeManager/Multiple-Added.png",
            },
            {
                label: "Mobile Landing Page",
                src: "/src/assets/img/projects/EmployeeManager/Create-Employee.png",
            },
            {
                label: "Mobile Experience Page",
                src: "/src/assets/img/projects/EmployeeManager/New-Added.png",
            },
            {
                label: "Mobile Experience Page",
                src: "/src/assets/img/projects/EmployeeManager/Mobile-Landing.png",
            },
        ]
    },
    {
        title: "Website CV",
        sections: [
            {
                title: "Overview",
                content: `The aim of my website CV is to prodcast my skills and experience as a full stack 
                software developer. No only is it more detailed than a standard two page CV it also allows 
                better visability of my skill level. There are also projects linked in to my CV which allow 
                a recurter or hiring manager to see how I structure my code, and gain insight to something 
                may don't get until they have already hired the developer.`
            },
            {
                title: "Technical Stack",
                content: `The frontend uses React and Chukra UI, the combination of these two component libraries 
                allow for fast implementation and true component driven architecture. These libraries sit on top of Vite 
                which was chosen for it's simplicity and free hosting. There is no formal back-end to this website 
                however it is worth noticing how I have configured the bodies of text that make up the webiste. Because
                the components take in a collection as a constant and the render it using a map function the components aren't 
                hard coded and could be more easier tweeked to get the text from a backend.`
            },
            {
                title: "Extensions",
                content: `As my career process so too will the information on the website. As I continue persnoal projects 
                to improve my skill and knowledge of a developer the projects page will become more of a focus point of 
                the website. There is also a potential to accomidate verius languages on the website as there is currently 
                a en.json a provider could be added to toggle the translation pipes to instead use a different language file.`
            },
        ],
        images: [
            {
                label: "Landing Page",
                src: "/src/assets/img/projects/WebsiteCV/Landing-page.png",
            },
            {
                label: "Skills Page",
                src: "/src/assets/img/projects/WebsiteCV/Skills-Page.png",
            },
            {
                label: "Education Page",
                src: "/src/assets/img/projects/WebsiteCV/Education-Page.png",
            },
            {
                label: "Experience Page",
                src: "/src/assets/img/projects/WebsiteCV/Experience-Page.png",
            },
            {
                label: "Mobile Landing Page",
                src: "/src/assets/img/projects/WebsiteCV/Mobile-Landing.png",
            },
            {
                label: "Mobile Experience Page",
                src: "/src/assets/img/projects/WebsiteCV/Mobile-Experience.png",
            },
        ]
    },
];