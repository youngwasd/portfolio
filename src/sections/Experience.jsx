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
        title: "Software Engineer Intern",
        company: "Hawl Technologies, LLC",
        date: "June 2025 - Present",
        description:
            "I worked as a full-stack engineer, building scalable backend services that significantly reduced user setup time by 40%. This involved creating CRUD endpoints and developing full front-end features that enabled users to securely input and manage their API keys. On the front end, I improved the application's responsiveness by 35% by refactoring React state management and streamlining data calls. A key part of my role was also enhancing the data accuracy of our AI-driven applications by integrating and fine-tuning the Google Custom Search API.",
    },
    {
        side: "right",
        title: "Software Engineer Intern",
        company: "Bilimetrix USA",
        date: "June 2025 - August 2025",
        description:
            "My work at Bilimetrix USA focused on improving our diagnostic software, contributing across the full development lifecycle. A major project was engineering a new image detector that identified shadows through pixel analysis, which boosted diagnostic accuracy by 20%. I also focused on improving our code quality, increasing unit test maintainability by 30% by centralizing mock data, and consistently delivered reliable production releases with 100% code coverage.",
    },
    {
        side: "left",
        title: "Research Associate",
        company: "University of Washington",
        date: "September 2023 - March 2024",
        description:
            "I contributed to an undergraduate research team focused on studying and simulating evolutionary robotics, specifically exploring prey/predator relationships. We utilized the NEAT (NeuroEvolution of Augmenting Topologies) algorithm to analyze and model complex behavioral dynamics within simulated environments. This experience enhanced my understanding of evolutionary algorithms and their applications in artificial intelligence and robotics research.",
    },
    {
        side: "right",
        title: "ICPC Competitor",
        company: "International Collegiate Programming Contest",
        date: "September 2023 - March 2024",
        description:
            "Competed in multiple editions of the International Collegiate Programming Contest (ICPC), solving complex algorithmic problems under strict time constraints. Worked collaboratively in a team of three to analyze, strategize, and implement efficient solutions using Java. Through this, I gained hands-on experience with data structures, dynamic programming, graph algorithms, and combinatorics while enhancing teamwork, time management, and critical thinking skills in a high-pressure environment.",
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
