import { useActiveSection } from "../useHooks/useActiveSection";
import { Button } from "@/components/ui/button";
import resume from "@/resume/YoungKim_Resume.pdf";
import { toast } from "sonner";
import { LuDownload } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
} from "@/components/Typography";
import Typewriter from "typewriter-effect";
import { RainAnimation } from "@/components/RainAnimation";

export const Hero = ({ setActive }) => {
    useActiveSection("hero", setActive);

    return (
        <div className="hero">
            <RainAnimation />
            <Badge variant="outline" className="badge-style">
                Actively Seeking Job Opportunities
            </Badge>

            <TypographyH1 className="subtitle mb-4">
                Turning innovative concepts
                <br />
                into production-ready code.
            </TypographyH1>
            <TypographyH2>Hi, I'm Young Kim!</TypographyH2>
            <TypographyH3 className="flex gap-1.5 mt-4">
                I am a
                <Typewriter
                    options={{
                        strings: ["Full Stack Developer", "Software Engineer"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </TypographyH3>

            <div className="flex mt-4 gap-2">
                <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="hover-lift"
                >
                    <a href="https://www.linkedin.com/in/youngwasd/">
                        <LuLinkedin />
                    </a>
                </Button>
                <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="hover-lift"
                >
                    <a href="https://github.com/youngwasd">
                        <LuGithub />
                    </a>
                </Button>
                <Button asChild variant="outline" className="hover-lift">
                    <a
                        href={resume}
                        download="YoungKim_Resume.pdf"
                        onClick={() => toast.success("Downloading Resume.")}
                    >
                        <LuDownload /> My Resume
                    </a>
                </Button>
            </div>
        </div>
    );
};
