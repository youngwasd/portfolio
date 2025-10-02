import { useActiveSection } from "../useHooks/useActiveSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import {
    TbBrandReact,
    TbBrandNextjs,
    TbBrandVite,
    TbBrandNodejs,
    TbBrandMysql,
} from "react-icons/tb";
import {
    SiExpress,
    SiFastapi,
    SiTailwindcss,
    SiFlask,
    SiJunit5,
    SiPostgresql,
    SiMongodb,
    SiPostman,
    SiUnity,
    SiOverleaf,
    SiBlazor,
} from "react-icons/si";
import { FaGitAlt, FaAws, FaDocker, FaUbuntu } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { VscAzure } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { TypographyH2, TypographyH4 } from "@/components/Typography";

export const Technology = ({ setActive }) => {
    useActiveSection("technology", setActive);
    const iconSize = 25;

    return (
        <div className="flex flex-col justify-center items-center">
            <Reveal side="right">
                <div className="text-center mb-12">
                    <TypographyH4 className="mb-2">
                        CRAFTED THROUGH EXPERIENCE
                    </TypographyH4>
                    <TypographyH2 className="subtitle">My Skills</TypographyH2>
                </div>
            </Reveal>

            <Reveal className="outer-tech-card" slide={true}>
                <Card className="tech-card">
                    <CardHeader className="tech-card-header">
                        <CardTitle>Frontend</CardTitle>
                    </CardHeader>

                    <CardContent className="tech-card-body">
                        <span className="hover-lift">
                            <TbBrandReact size={iconSize} /> React.js
                        </span>
                        <span className="hover-lift">
                            <TbBrandNextjs size={iconSize} /> Next.js
                        </span>
                        <span className="hover-lift">
                            <TbBrandVite size={iconSize} /> Vite
                        </span>
                        <span className="hover-lift">
                            <SiBlazor size={iconSize} /> Blazor
                        </span>
                    </CardContent>
                </Card>
            </Reveal>

            <Reveal className="outer-tech-card" slide={true}>
                <Card className="tech-card">
                    <CardHeader className="tech-card-header">
                        <CardTitle>Backend</CardTitle>
                    </CardHeader>

                    <CardContent className="tech-card-body">
                        <span className="hover-lift">
                            <TbBrandNodejs size={iconSize} /> Node.js
                        </span>
                        <span className="hover-lift">
                            <SiExpress size={iconSize} /> Express.js
                        </span>
                        <span className="hover-lift">ASP.NET</span>
                        <span className="hover-lift">
                            <SiFastapi size={iconSize} /> FastAPI
                        </span>
                    </CardContent>
                </Card>
            </Reveal>

            <Reveal className="outer-tech-card" slide={true}>
                <Card className="tech-card">
                    <CardHeader className="tech-card-header">
                        <CardTitle>Frameworks & Libraries</CardTitle>
                    </CardHeader>

                    <CardContent className="tech-card-body">
                        <span className="hover-lift">
                            <SiTailwindcss size={iconSize} /> Tailwind CSS
                        </span>
                        <span className="hover-lift">
                            <SiFlask size={iconSize} /> Flask
                        </span>
                        <span className="hover-lift">
                            <SiJunit5 size={iconSize} /> JUnit
                        </span>
                        <span className="hover-lift">NUnit</span>
                    </CardContent>
                </Card>
            </Reveal>

            <Reveal className="outer-tech-card" slide={true}>
                <Card className="tech-card">
                    <CardHeader className="tech-card-header">
                        <CardTitle>Database</CardTitle>
                    </CardHeader>

                    <CardContent className="tech-card-body">
                        <span className="hover-lift">
                            <SiPostgresql size={iconSize} /> PostgreSQL
                        </span>
                        <span className="hover-lift">
                            <SiMongodb size={iconSize} /> MongoDB
                        </span>
                        <span className="hover-lift">
                            <TbBrandMysql size={iconSize} /> MySQL
                        </span>
                    </CardContent>
                </Card>
            </Reveal>

            <Reveal className="outer-tech-card" slide={true}>
                <Card className="tech-card">
                    <CardHeader className="tech-card-header">
                        <CardTitle>Tools</CardTitle>
                    </CardHeader>

                    <CardContent className="tech-card-body">
                        <span className="hover-lift">
                            <FaGitAlt size={iconSize} /> Git
                        </span>
                        <span className="hover-lift">
                            <LuGithub size={iconSize} /> GitHub
                        </span>
                        <span className="hover-lift">
                            <VscAzure size={iconSize} /> Azure
                        </span>
                        <span className="hover-lift">
                            <FaAws size={iconSize} /> AWS
                        </span>
                        <span className="hover-lift">
                            <FaDocker size={iconSize} /> Docker
                        </span>
                        <span className="hover-lift">
                            <FaUbuntu size={iconSize} /> Ubuntu
                        </span>
                        <span className="hover-lift">
                            <SiPostman size={iconSize} /> Postman
                        </span>
                        <span className="hover-lift">
                            <SiUnity size={iconSize} /> Unity
                        </span>
                        <span className="hover-lift">
                            <DiVisualstudio size={iconSize} /> VS
                            (Code/Enterprise)
                        </span>
                        <span className="hover-lift">
                            <SiOverleaf size={iconSize} /> Overleaf
                        </span>
                    </CardContent>
                </Card>
            </Reveal>

            <Reveal className="outer-tech-card" slide={true}>
                <Card className="tech-card">
                    <CardHeader className="tech-card-header">
                        <CardTitle>Soft Skills</CardTitle>
                    </CardHeader>

                    <CardContent className="tech-card-body">
                        <span className="hover-lift">
                            Agile Methodology / Scrum
                        </span>
                        <span className="hover-lift">Project Management</span>
                        <span className="hover-lift">Debugging</span>
                        <span className="hover-lift">
                            Cross-Functional Collaboration
                        </span>
                        <span className="hover-lift">Communication</span>
                        <span className="hover-lift">Problem-Solving</span>
                    </CardContent>
                </Card>
            </Reveal>
        </div>
    );
};
