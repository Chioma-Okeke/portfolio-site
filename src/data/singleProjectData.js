// Import images
import tolceImage1 from "../images/tolceLearningHub.png";
import tolceImage2 from "../images/tolceLearningHubdesktop.png";
import tolceImage3 from "../images/TolceLearningmob2.png";
import Image4 from "../images/tolceLearningHub.png";
import goDaddyImage1 from "../images/Godaddymob1.png";
import goDaddyImage2 from "../images/GoDaddydestop.png";
import goDaddyImage3 from "../images/Godaddymob2.png";
import Image5 from "../images/profile.jpg";
import teleHealth1 from "../images/tele-health2.png";
import teleHealth2 from "../images/Tele-health1.png";
import wordsForTheSoul2 from "../images/Words-for-the-soul.png";
import wordsForTheSoul1 from "../images/words-for-the-soul2.png";
import weather1 from "../images/weatherMob.png"
import weather2 from "../images/weatherLap.png"
import blog1 from "../images/simpleblog1.png"
import blog2 from "../images/simpleblog2.png"
import blog3 from "../images/simpleblog3.png"
import tictactoe1 from "../images/tictactoe1.png"
import tictactoe2 from "../images/tictactoe2.png"
import music1 from "../images/music1.png"
import music2 from "../images/music2.png"
import Image6 from "../images/profile.jpg";
// Import icons
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const singleProjectData = [
    {
        ProjectHeader: {
            title: "GoDaddy Clone",
            publishDate: "June 30, 2024",
            link: "https://chummycopygoodaddy.netlify.app/",
        },
        ProjectImages: [
            {
                id: 1,
                title: "Kabul Project Management UI",
                img: goDaddyImage1,
            },
            {
                id: 2,
                title: "Kabul Project Management UI",
                img: goDaddyImage2,
            },
            {
                id: 3,
                title: "Kabul Project Management UI",
                img: goDaddyImage3,
            },
        ],
        ProjectInfo: {
            ClientHeading: "Page Replicated",
            CompanyInfo: [
                {
                    id: 1,
                    title: "Name",
                    details: "GoDaddy Article Page",
                },
            ],
            ObjectivesHeading: "Objective",
            ObjectivesDetails:
                "This platform was created as a project for the sheCodes Africa Community",
            Technologies: [
                {
                    title: "Tools & Technologies",
                    techs: ["React", "Tailwind CSS"],
                },
            ],
            ProjectDetailsHeading: "Project Overview",
            ProjectDetails: [
                {
                    id: 1,
                    projectOverview:
                        "As part of a challenge from the She Codes Africa community, I created a clone of the GoDaddy article page. This project was particularly insightful as it allowed me to delve deeper into ReactJS and learn new concepts that I hadn't previously encountered. The clone accurately replicates the layout and functionality of the original GoDaddy article page, showcasing my ability to translate design into code and implement interactive features. This project not only enhanced my ReactJS skills but also highlighted my capacity for tackling real-world challenges and delivering effective solutions.",
                    ProblemStatementAddressed: [],
                    userStory: [],
                },
            ],
            SocialSharingHeading: "Share This",
            SocialSharing: [
                {
                    id: 1,
                    name: "GitHub",
                    icon: <FiGithub />,
                    url: "https://github.com/Chioma-Okeke",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://www.linkedin.com/in/okeke-chioma",
                },
            ],
        },
        RelatedProject: {
            title: "Related Projects",
            Projects: [
                {
                    id: 1,
                    title: "Mobile UI",
                    img: Image4,
                },
                {
                    id: 2,
                    title: "Web Application",
                    img: Image5,
                },
                {
                    id: 3,
                    title: "UI Design",
                    img: Image6,
                },
                {
                    id: 4,
                    title: "Kabul Mobile App UI",
                    img: goDaddyImage3,
                },
            ],
        },
    },
    {
        ProjectHeader: {
            title: "Words for the Soul",
            publishDate: "May 23, 2024",
            link: "https://wordsforthesoul.netlify.app/",
        },
        ProjectImages: [
            {
                id: 1,
                title: "Words  for the Soul",
                img: wordsForTheSoul1,
            },
            {
                id: 2,
                title: "Words  for the Soul",
                img: wordsForTheSoul2,
            },
        ],
        ProjectInfo: {
            ClientHeading: "Self-made",
            CompanyInfo: [
                {
                    id: 1,
                    title: "Name",
                    details: "Words for the Soul",
                },
            ],
            ObjectivesHeading: "Objective",
            ObjectivesDetails:
                "A quote generator with a dynamic background and quotes",
            Technologies: [
                {
                    title: "Tools & Technologies",
                    techs: ["HTML", "CSS", "Vanilla js"],
                },
            ],
            ProjectDetailsHeading: "Project Overview",
            ProjectDetails: [
                {
                    id: 1,
                    projectOverview:
                        "This is an interactive web application that fetches and displays inspiring quotes from a dedicated API. Developed using vanilla JavaScript, this application presents each quote in a visually appealing manner. One of the key features of this application is its ability to allow users to share their favorite quotes directly on Twitter. Furthermore, to keep the user interface engaging, it features a dynamic background that changes every minute.",
                    ProblemStatementAddressed: [],
                    userStory: [],
                },
            ],
            SocialSharingHeading: "Share This",
            SocialSharing: [
                {
                    id: 1,
                    name: "GitHub",
                    icon: <FiGithub />,
                    url: "https://github.com/Chioma-Okeke",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://www.linkedin.com/in/okeke-chioma",
                },
            ],
        },
        RelatedProject: {
            title: "Related Projects",
            Projects: [
                {
                    id: 1,
                    title: "Mobile UI",
                    img: Image4,
                },
                {
                    id: 2,
                    title: "Web Application",
                    img: Image5,
                },
                {
                    id: 3,
                    title: "UI Design",
                    img: Image6,
                },
                {
                    id: 4,
                    title: "Kabul Mobile App UI",
                    img: goDaddyImage3,
                },
            ],
        },
    },
    {
        ProjectHeader: {
            title: "Real-time Weather Application",
            publishDate: "June 19, 2024",
            link: "https://mother-nature-status.vercel.app/",
        },
        ProjectImages: [
            {
                id: 1,
                title: "Kabul Project Management UI",
                img: weather1,
            },
            {
                id: 2,
                title: "Kabul Project Management UI",
                img: weather2,
            },
        ],
        ProjectInfo: {
            ClientHeading: "Page Replicated",
            CompanyInfo: [
                {
                    id: 1,
                    title: "Name",
                    details: "Real-time Weather Application",
                },
            ],
            ObjectivesHeading: "Objective",
            ObjectivesDetails:
                "A web applicatiion to check weather forecast and real-time weather data for any location",
            Technologies: [
                {
                    title: "Tools & Technologies",
                    techs: ["React", "Tailwind CSS", "OpenWeatherMap API"],
                },
            ],
            ProjectDetailsHeading: "Project Overview",
            ProjectDetails: [
                {
                    id: 1,
                    projectOverview:
                        "Developed a user-friendly web application that provides accurate and detailed weather forecasts. The application uses data from the OpenWeatherMap API and displays current weather conditions, hourly forecasts, and a seven-day weather outlook. It also includes a search functionality to check the weather in different locations worldwide. Technologies used include React for the front-end and Node.js for the back-end.",
                    ProblemStatementAddressed: [],
                    userStory: [],
                },
            ],
            SocialSharingHeading: "Share This",
            SocialSharing: [
                {
                    id: 1,
                    name: "GitHub",
                    icon: <FiGithub />,
                    url: "https://github.com/Chioma-Okeke",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://www.linkedin.com/in/okeke-chioma",
                },
            ],
        },
        RelatedProject: {
            title: "Related Projects",
            Projects: [
                {
                    id: 1,
                    title: "Mobile UI",
                    img: Image4,
                },
                {
                    id: 2,
                    title: "Web Application",
                    img: Image5,
                },
                {
                    id: 3,
                    title: "UI Design",
                    img: Image6,
                },
                {
                    id: 4,
                    title: "Kabul Mobile App UI",
                    img: goDaddyImage3,
                },
            ],
        },
    },
    {
        ProjectHeader: {
            title: "Lifestyle Blog Site",
            publishDate: "May 23, 2024",
            link: "https://livingthesimplelifeblog.netlify.app/",
        },
        ProjectImages: [
            {
                id: 1,
                title: "Kabul Project Management UI",
                img: blog1,
            },
            {
                id: 2,
                title: "Kabul Project Management UI",
                img: blog2,
            },
            {
                id: 3,
                title: "Kabul Project Management UI",
                img: blog3,
            },
        ],
        ProjectInfo: {
            ClientHeading: "Page Replicated",
            CompanyInfo: [
                {
                    id: 1,
                    title: "Name",
                    details: "Lifestyle Blog Site",
                },
            ],
            ObjectivesHeading: "Objective",
            ObjectivesDetails:
                "A website for a minimalist lifestyle Influencer",
            Technologies: [
                {
                    title: "Tools & Technologies",
                    techs: ["Vanilla JS", "CSS", "HTML"],
                },
            ],
            ProjectDetailsHeading: "Project Overview",
            ProjectDetails: [
                {
                    id: 1,
                    projectOverview:
                        "This project was a fully responsive blog site created using vanilla JavaScript. The aim of the project was to delve into the intricacies of creating responsive sites, and it was successful in achieving this goal. The blog site adapts seamlessly to various device screens, ensuring that users have an optimal browsing experience regardless of their device type. This project served as a practical exploration into responsive web design principles, strengthening understanding and proficiency in this key aspect of modern web development.",
                    ProblemStatementAddressed: [],
                    userStory: [],
                },
            ],
            SocialSharingHeading: "Share This",
            SocialSharing: [
                {
                    id: 1,
                    name: "GitHub",
                    icon: <FiGithub />,
                    url: "https://github.com/Chioma-Okeke",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://www.linkedin.com/in/okeke-chioma",
                },
            ],
        },
        RelatedProject: {
            title: "Related Projects",
            Projects: [
                {
                    id: 1,
                    title: "Mobile UI",
                    img: Image4,
                },
                {
                    id: 2,
                    title: "Web Application",
                    img: Image5,
                },
                {
                    id: 3,
                    title: "UI Design",
                    img: Image6,
                },
                {
                    id: 4,
                    title: "Kabul Mobile App UI",
                    img: goDaddyImage3,
                },
            ],
        },
    },
    {
        ProjectHeader: {
            title: "Tic-Tac-Toe",
            publishDate: "June 24, 2024",
            link: "https://chummy-tic-tac-toe.netlify.app/",
        },
        ProjectImages: [
            {
                id: 1,
                title: "Kabul Project Management UI",
                img: tictactoe1,
            },
            {
                id: 2,
                title: "Kabul Project Management UI",
                img: tictactoe2,
            },
        ],
        ProjectInfo: {
            ClientHeading: "Page Replicated",
            CompanyInfo: [
                {
                    id: 1,
                    title: "Name",
                    details: "Tic-Tac-Toe",
                },
            ],
            ObjectivesHeading: "Objective",
            ObjectivesDetails:
                "A responsive tic-tac-toe application",
            Technologies: [
                {
                    title: "Tools & Technologies",
                    techs: ["React", "Tailwind CSS"],
                },
            ],
            ProjectDetailsHeading: "Project Overview",
            ProjectDetails: [
                {
                    id: 1,
                    projectOverview:
                        "This project involved the creation of a fully responsive Tic Tac Toe game. The game was developed using React and styled with Tailwind CSS, demonstrating a strong understanding of both technologies. The game includes two play modes: Solo and Opponent, offering varied gameplay experiences. In future updates of this application, there are plans to enhance the complexity of the computer mode by introducing a level system. Additionally, the Opponent mode will be upgraded to support gameplay with players over a network, further expanding the game's interactive capabilities.",
                    ProblemStatementAddressed: [],
                    userStory: [],
                },
            ],
            SocialSharingHeading: "Share This",
            SocialSharing: [
                {
                    id: 1,
                    name: "GitHub",
                    icon: <FiGithub />,
                    url: "https://github.com/Chioma-Okeke",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://www.linkedin.com/in/okeke-chioma",
                },
            ],
        },
        RelatedProject: {
            title: "Related Projects",
            Projects: [
                {
                    id: 1,
                    title: "Mobile UI",
                    img: Image4,
                },
                {
                    id: 2,
                    title: "Web Application",
                    img: Image5,
                },
                {
                    id: 3,
                    title: "UI Design",
                    img: Image6,
                },
                {
                    id: 4,
                    title: "Kabul Mobile App UI",
                    img: goDaddyImage3,
                },
            ],
        },
    },
    {
        ProjectHeader: {
            title: "Chummy's Music App",
            publishDate: "June 24, 2024",
            link: "https://chummyfavsongs.netlify.app/",
        },
        ProjectImages: [
            {
                id: 1,
                title: "Kabul Project Management UI",
                img: music1,
            },
            {
                id: 2,
                title: "Kabul Project Management UI",
                img: music2,
            },
        ],
        ProjectInfo: {
            ClientHeading: "Page Replicated",
            CompanyInfo: [
                {
                    id: 1,
                    title: "Name",
                    details: "Chummy's Music App",
                },
            ],
            ObjectivesHeading: "Objective",
            ObjectivesDetails:
                "A responsive music application with my favourite songs.",
            Technologies: [
                {
                    title: "Tools & Technologies",
                    techs: ["React", "Tailwind CSS"],
                },
            ],
            ProjectDetailsHeading: "Project Overview",
            ProjectDetails: [
                {
                    id: 1,
                    projectOverview:
                        "Chummy's Favorite Songs is an interactive music application that aims to provide an immersive experience for users. The application is designed to be fully responsive, ensuring an optimal user experience across various devices. It features a comprehensive list of my favorite songs, offering users a peek into my music preferences. One of the standout features is the genre section, which categorizes the songs, providing an organized and easy-to-navigate interface. In an upcoming version of the application, I plan to further enhance user interactivity by introducing volume control functionality, enabling users to adjust the volume directly within the application.",
                    ProblemStatementAddressed: [],
                    userStory: [],
                },
            ],
            SocialSharingHeading: "Share This",
            SocialSharing: [
                {
                    id: 1,
                    name: "GitHub",
                    icon: <FiGithub />,
                    url: "https://github.com/Chioma-Okeke",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://www.linkedin.com/in/okeke-chioma",
                },
            ],
        },
        RelatedProject: {
            title: "Related Projects",
            Projects: [
                {
                    id: 1,
                    title: "Mobile UI",
                    img: Image4,
                },
                {
                    id: 2,
                    title: "Web Application",
                    img: Image5,
                },
                {
                    id: 3,
                    title: "UI Design",
                    img: Image6,
                },
                {
                    id: 4,
                    title: "Kabul Mobile App UI",
                    img: goDaddyImage3,
                },
            ],
        },
    },
    {
        ProjectHeader: {
            title: "Tele health Application",
            publishDate: "On-going",
            link: "https://tele-health-buddy.netlify.app/",
        },
        ProjectImages: [
            {
                id: 1,
                title: "Kabul Project Management UI",
                img: teleHealth1,
            },
            {
                id: 2,
                title: "Kabul Project Management UI",
                img: teleHealth2,
            },
            // {
            //     id: 3,
            //     title: "Kabul Project Management UI",
            //     img: goDaddyImage3,
            // },
        ],
        ProjectInfo: {
            ClientHeading: "About Client",
            CompanyInfo: [
                {
                    id: 1,
                    title: "Name",
                    details: "Tele-Health",
                },
                {
                    id: 2,
                    title: "Services",
                    details: "Healthcare",
                },
            ],
            ObjectivesHeading: "Objective",
            ObjectivesDetails:
                "The objectives of this applicationis to expand healthcare reach to individual with limited mobility, Increase Accessibility to Healthcare regardless of geographical location and finally to enhance convenience",
            Technologies: [
                {
                    title: "Tools & Technologies",
                    techs: ["React", "Tailwind CSS", "Figma"],
                },
            ],
            ProjectDetailsHeading: "Project Overview",
            ProjectDetails: [
                {
                    id: 1,
                    projectOverview:
                        "Developing a desktop web application that will help in bridging the gap of medical ignorance among the mass. This application comprises of 3 main features. Vitals monitoring, video and audio conferencing and Schedule Management. I am handling the frontend engineering and this is currently being build using react.",
                    ProblemStatementAddressed: [
                        "Many individuals face challenges in accessing timely healthcare due to geographical barriers or mobility issues.",
                        "Managing chronic health conditions requires continuous monitoring of vital signs and adherence to medication schedules.",
                        "Caregivers and patients struggle with organizing and managing healthcare appointments efficiently.",
                    ],
                    userStory: [
                        "As a user with chronic health conditions, I want to track my vitals in real-time and receive alerts for any abnormal readings or medication reminders",
                        "As a patient unable to visit a doctor physically, I want to have secure video conferencing and real-time chat support with healthcare providers for virtual consultations",
                        "As a caregiver, I want to manage appointments and receive notifications for upcoming appointments and health updates of my dependents",
                        "As a patient with symptoms, I want to quickly check possible conditions and receive recommendations for further actions, such as consulting a doctor or self-care",
                    ],
                },
            ],
            SocialSharingHeading: "Share This",
            SocialSharing: [
                {
                    id: 1,
                    name: "GitHub",
                    icon: <FiGithub />,
                    url: "https://github.com/Chioma-Okeke",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://www.linkedin.com/in/okeke-chioma",
                },
            ],
        },
        RelatedProject: {
            title: "Related Projects",
            Projects: [
                {
                    id: 1,
                    title: "Mobile UI",
                    img: Image4,
                },
                {
                    id: 2,
                    title: "Web Application",
                    img: Image5,
                },
                {
                    id: 3,
                    title: "UI Design",
                    img: Image6,
                },
                {
                    id: 4,
                    title: "Kabul Mobile App UI",
                    img: goDaddyImage3,
                },
            ],
        },
    },
    {
        ProjectHeader: {
            title: "Tolce Learning Hub Site",
            publishDate: "June 1, 2024",
            link: "https://tolcelearninghub.netlify.app/",
        },
        ProjectImages: [
            {
                id: 1,
                title: "Kabul Project Management UI",
                img: tolceImage1,
            },
            {
                id: 2,
                title: "Kabul Project Management UI",
                img: tolceImage2,
            },
            {
                id: 3,
                title: "Kabul Project Management UI",
                img: tolceImage3,
            },
        ],
        ProjectInfo: {
            ClientHeading: "About Client",
            CompanyInfo: [
                {
                    id: 1,
                    title: "Name",
                    details: "Tolce Learning Hub",
                },
                {
                    id: 2,
                    title: "Services",
                    details: "Education Administration Programs",
                },
            ],
            ObjectivesHeading: "Objective",
            ObjectivesDetails:
                "This platform provides information about the NGO's mission, initiatives, and testimonial from the traning alumni",
            Technologies: [
                {
                    title: "Tools & Technologies",
                    techs: ["React", "Tailwind CSS", "Figma"],
                },
            ],
            ProjectDetailsHeading: "Project Overview",
            ProjectDetails: [
                {
                    id: 1,
                    projectOverview:
                        "Developed a comprehensive 4-page website for an Educational Technology Non-profit Organization to address existing challenges in digital presence, user experience, and information accessibility. The platform showcases the NGO's mission, initiatives, and partners, leveraging React for enhanced interactivity and ensuring full responsiveness across devices.",
                    ProblemStatementAddressed: [
                        "The NGO lacks a modern digital platform to effectively communicate its mission, initiatives, and partnerships to a global audience",
                        "Visitors encounter usability issues on the current website due to its non-responsive design, hindering their ability to access information seamlessly across different devices.",
                        "Potential supporters struggle to find comprehensive information about the NGO's ongoing initiatives, past projects, and collaborative partners, limiting their understanding and engagement with the organization.",
                    ],
                    userStory: [
                        "As a visitor to the Educational Technology Non-profit Organization's website",
                        "I want to easily access detailed information about the NGO's mission, initiatives, and partners",
                        "So that I can understand the organization's impact and decide how I can contribute or engage.",
                    ],
                },
            ],
            SocialSharingHeading: "Share This",
            SocialSharing: [
                {
                    id: 1,
                    name: "GitHub",
                    icon: <FiGithub />,
                    url: "https://github.com/Chioma-Okeke",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://www.linkedin.com/in/okeke-chioma",
                },
            ],
        },
        RelatedProject: {
            title: "Related Projects",
            Projects: [
                {
                    id: 1,
                    title: "Mobile UI",
                    img: Image4,
                },
                {
                    id: 2,
                    title: "Web Application",
                    img: Image5,
                },
                {
                    id: 3,
                    title: "UI Design",
                    img: Image6,
                },
                {
                    id: 4,
                    title: "Kabul Mobile App UI",
                    img: goDaddyImage3,
                },
            ],
        },
    },
];
