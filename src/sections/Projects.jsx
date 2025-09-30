import { useActiveSection } from "../useHooks/useActiveSection";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { TypographyH2, TypographyH4 } from "@/components/Typography";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";

const projects = [
    {
        title: "SeaTrack",
        description:
            "Web-based full-stack time-tracking application, built to be an efficient time and task tracking app. We are developing the app to allow for users to log, view, and manage their time through a clean intuitive interface. This application was built with React, Node.js, and Express.js. The user credentials and logs are managed using a PostGresSQL database.",
        link: "",
        github: "",
    },
    {
        title: "Bilimetrix",
        description:
            "Bilimetrix focused on improving a critical web application used by medical professionals to determine patient bilirubin levels, contributing across the full development lifecycle. A major project was engineering a new image detector that identified shadows through pixel analysis, which boosted diagnostic accuracy by 20%. I also focused on improving our code quality, increasing unit test maintainability by 30% by centralizing mock data, and consistently delivered reliable production releases with 100% code coverage.",
        link: "",
        github: "",
    },
    {
        title: "AI Control Box",
        description:
            "AI Control Box was created around the premise that AI should be easily accessible to everyone. We built this app to give users near full complete control over the AI's responses. It allows many features that help the users know the AI's thought process, web search domains, and its confidence in the response.",
        link: "https://controlbox.hawltechs.com/",
        github: "",
    },
    {
        title: "AI Case Interview",
        description:
            "Collaborated on the development of an AI-powered case interview preparation platform designed to simulate real-world consulting interview scenarios. Implemented video and testimonial integrations, including an AI-generated video with character voices and captions, to enhance user engagement. Contributed to front-end improvements for the homepage, ensuring a professional, user-friendly interface and consistent branding across the site.",
        link: "https://caseprep.hawltechs.com/",
        github: "",
    },
    {
        title: "NEAT Hunting and Gathering",
        description:
            "I helped develop a web-based simulation using the NEAT algorithm, where AI robots evolve through prey/predator dynamics. I focused on implementing binocular vision to improve robot perception and survival. The project was built with HTML, CSS, and JavaScript and hosted on GitHub Pages.",
        link: "https://osdreamscape.github.io/NEAT-Hunting-and-Gathering/",
        github: "",
    },
    {
        title: "Holo Leveling",
        description:
            "I collaborated with a team of three to develop a roguelike web game from scratch using JavaScript and HTML. We implemented an interactive UI and integrated game/asset physics. We made sure to focus on iterative development, code reviews, and writing modular code to ensure maintainability. We often tested gameplay features for quality assurance.",
        link: "https://youngwasd.github.io/HoloLeveling/",
        github: "https://github.com/youngwasd/HoloLeveling",
    },
    {
        title: "Flappy Bird",
        description:
            "Developed a full-stack browser-based version of Flappy Bird using JavaScript and HTML. Building both the front-end and back-end components. Engineered custom game logic and asset handling, while attempting to ensure seamless gameplay across devices. Deployed the complete game to AWS S3, ensuring public accessibility and smooth performance.",
        link: "http://flappybird-young.s3-website-us-west-2.amazonaws.com",
        github: "https://github.com/youngwasd/flappybird",
    },
    {
        title: "Portfolio",
        description:
            "I built a personal portfolio website to showcase my projects and skills, it featurs a responsive design and seamless navigation with React, Motion, HTML, CSS, and JavaScript. The site includes sections for my work, experience, and education, with an interactive UI for a user-friendly browsing experience.",
        link: "https://youngwasd.github.io/portfolio/",
        github: "",
    },
];

export const Projects = ({ setActive }) => {
    useActiveSection("projects", setActive);
    return (
        <div className="flex flex-col justify-center items-center mt-40">
            <div className="proj-container">
                <div className="proj-header">
                    <Reveal side="right">
                        <TypographyH4 className="mb-2">
                            EXPLORE MY CREATIONS
                        </TypographyH4>
                        <TypographyH2 className="subtitle">
                            My Projects
                        </TypographyH2>
                    </Reveal>
                </div>

                {projects.map((item, i) => (
                    <Card key={i} className="outer-proj-card">
                        <CardHeader>
                            <CardTitle className="border-b-2 pb-3 text-xl">
                                {item.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{item.description}</CardContent>
                        {(item.link !== "" || item.github !== "") && (
                            <CardFooter className="flex gap-4">
                                {item.link !== "" && (
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="bg-transparent hover-lift"
                                    >
                                        <a href={item.link}>
                                            Live Site{" "}
                                            <LuSquareArrowOutUpRight />
                                        </a>
                                    </Button>
                                )}
                                {item.github !== "" && (
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="bg-transparent hover-lift"
                                    >
                                        <a href={item.github}>
                                            GitHub <LuGithub />
                                        </a>
                                    </Button>
                                )}
                            </CardFooter>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};
