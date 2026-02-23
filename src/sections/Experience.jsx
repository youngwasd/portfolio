import { useActiveSection } from "../useHooks/useActiveSection";
import { GoDotFill } from "react-icons/go";
import { Reveal } from "@/components/Reveal";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { TypographyH2, TypographyH4 } from "@/components/Typography";

const timelineItems = [
    {
        side: "left",
        title: "Software Consultant",
        company: "Seastack Softare LLC",
        date: "October 2025 - Present",
        description:
            "As a Software Consultant at SeaStack, I deliver full-stack features by modifying database schemas, backend APIs, and frontend components to improve workflow efficiency and data visibility. I regularly trace complex task and file-handling logic to resolve edge cases and ensure consistent end-to-end data flow from the database to the UI. I review and merge pull requests, resolve multi-branch conflicts, and help maintain a stable development environment during parallel feature development. Through Agile collaboration, pair programming, and detailed PR documentation, I focus on shipping reliable, well-tested features that reduce errors and improve overall system stability.",
    },
    {
        side: "right",
        title: "Web Developer",
        company: "Edward Sr Aviation Advisors",
        date: "January 2026 - Present",
        description:
            "As a Web Developer, I build and maintain a production React application using Vite, focusing on performance, responsiveness, and clean UI architecture. I design modular, reusable components and implement dynamic routing with React Router to create smooth navigation and intuitive user flows. I ensure layouts are fully responsive and accessible across devices using modern CSS techniques. My work emphasizes maintainability, scalability, and delivering a polished user experience in a live production environment.",
    },
    {
        side: "left",
        title: "Lead Software Engineer Intern",
        company: "Hawl Technologies, LLC",
        date: "June 2025 - November 2025",
        description:
            "I worked as a Lead Software Engineer Intern, designing scalable backend services that reduced user setup time by 40% through building CRUD APIs and secure key management features. On the frontend, I improved application responsiveness by 35% by refactoring React state management and optimizing data flow. In addition to hands-on development, I led my team by assigning tasks, testing implementations, and providing constructive feedback, ensuring code quality and alignment with project goals. I also enhanced the accuracy of AI-driven applications by integrating and fine-tuning our MCP server, improving data relevancy and user experience.",
    },
    {
        side: "right",
        title: "Software Engineer Intern",
        company: "Bilimetrix USA",
        date: "June 2025 - August 2025",
        description:
            "As a Software Engineer Intern at Bilimetrix USA, I contributed across the full development lifecycle to improve our diagnostic software, utilizing a C# Microsoft Blazor codebase. A major accomplishment was engineering a pixel-brightness-based shadow detector that enhanced diagnostic accuracy by 20% through algorithm design for medical image analysis. I significantly improved code quality by centralizing redundant mock data into a helper module, which increased unit test maintainability by 30%. Furthermore, I ensured reliable production releases by actively participating in design discussions, managing GitHub source version control, and implementing CI pipelines and comprehensive unit tests to maintain 100% code coverage. I also leveraged Microsoft Azure for application deployment and hosting",
    },
    {
        side: "left",
        title: "Research Associate",
        company: "University of Washington",
        date: "September 2023 - March 2024",
        description:
            "As a Research Associate, I was part of an undergraduate research team focused on evolutionary robotics and predator-prey simulations. I significantly enhanced neural network robustness by extending input capacity for binocular vision, leading to a 25% improvement in accuracy for agent behaviors. We utilized the NeuroEvolution of Augmenting Topologies (NEAT) algorithm to model complex behavioral dynamics and enable agents to evolve sophisticated hunting and gathering strategies. This experience culminated in co-authoring a research paper, demonstrating strong research and communication skills.",
    },
    {
        side: "right",
        title: "ICPC Competitor",
        company: "International Collegiate Programming Contest",
        date: "September 2023 - March 2024",
        description:
            "Competed in multiple editions of the International Collegiate Programming Contest (ICPC), collaborating in a three-person team to solve complex algorithmic challenges under strict time constraints. This experience provided hands-on application of advanced data structures, dynamic programming, and graph algorithms using Java. The intense environment significantly enhanced my critical thinking, time management, and strategic implementation skills under pressure.",
    },
];

export const Experience = ({ setActive }) => {
    useActiveSection("experience", setActive);

    return (
        <div className="mt-40">
            <div className="text-center">
                <Reveal side="right">
                    <TypographyH4 className="mb-2">
                        JOURNEY THROUGH MY CAREER
                    </TypographyH4>
                    <TypographyH2 className="subtitle">
                        My Experiences
                    </TypographyH2>
                </Reveal>
            </div>

            <div className="timeline">
                {timelineItems.map((item, i) => (
                    <div key={i} className="relative">
                        <div className="timeline-dot">
                            <GoDotFill className="w-full h-full" />
                        </div>

                        <Reveal side={item.side}>
                            <Card
                                className={`container ${item.side}-container hover-lift`}
                            >
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription className="flex justify-between">
                                        <span>{item.company}</span>
                                        <span>{item.date}</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>{item.description}</CardContent>

                                <span
                                    className={`${item.side}-container-arrow`}
                                />
                            </Card>
                        </Reveal>
                    </div>
                ))}
            </div>
        </div>
    );
};
