// Import images
import tolceImage1 from "../images/tolceLearningHub.png";
import tolceImage2 from "../images/tolceLearningHubdesktop.png";
import tolceImage3 from "../images/TolceLearningmob2.png";
import Image4 from "../images/tolceLearningHub.png";
import goDaddyImage1 from "../images/Godaddymob1.png"
import goDaddyImage2 from "../images/GoDaddydestop.png"
import goDaddyImage3 from "../images/Godaddymob2.png"
import Image5 from "../images/profile.jpg";
import Image6 from "../images/profile.jpg";
// Import icons
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const singleProjectData = [
    {
        ProjectHeader: {
            title: "GoDaddy Clone",
            publishDate: "June 30, 2024",
			link: "https://chummycopygoodaddy.netlify.app/"
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
            title: "Tolce Learning Hub Site",
            publishDate: "June 1, 2024",
			link: "https://tolcelearninghub.netlify.app/"
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
