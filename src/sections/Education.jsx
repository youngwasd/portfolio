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
        degree: "Master of Science in Computer Science",
        school: "Seattle University",
        date: "March 2025 - Present",
        description:
            "I am set to begin my journey toward a Master's degree in Computer Science to build upon my strong academic foundation. With a strong commitment to deepen and expand my knowledge and skill in my field. I aim to engage in advanced learning, problem-solving, and communication, further preparing myself for an impactful contribution to the tech industry.",
    },
    {
        side: "right",
        degree: "Bachelor of Science in Computer Science\nMinor in Mathematics",
        school: "University of Washington",
        date: "September 2021 - March 2024",
        description:
            " My transition from high school to university, facilitated by prior experience in the Running Start program, was seamless. Acquainted with the rigor of university-level coursework, I approached my studies with diligence and determination to attain a commendable GPA. Throughout my tenure at UW, I maintained a consistent GPA of 3.81, earning recurrent placement on the Dean's List. This steadfast commitment to academic excellence underscores my disciplined work ethic and adaptability in academic settings.",
    },
    {
        side: "left",
        degree: "Associate of Arts in Direct Transfer Agreement",
        school: "Pierce College",
        date: "September 2019 - June 2021",
        description:
            "Commencing Pierce College as a Running Start student during junior year sparked a commitment to academic excellence. With focused effort, I attained a 3.88 GPA at graduation, earning frequent placements on the Dean's and President's Lists. These achievements reflect my dedication to learning and scholarly growth.",
    },
];

export const Education = ({ setActive }) => {
    useActiveSection("education", setActive);

    return (
        <div className="mt-40">
            <Reveal side="right">
                <div className="text-center">
                    <TypographyH4 className="mb-2">
                        WHERE IT ALL BEGAN
                    </TypographyH4>
                    <TypographyH2 className="subtitle">
                        My Education
                    </TypographyH2>
                </div>
            </Reveal>

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
                                    <CardTitle
                                        style={{ whiteSpace: "pre-line" }}
                                    >
                                        {item.degree}
                                    </CardTitle>
                                    <CardDescription className="flex justify-between">
                                        <span>{item.school}</span>
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
