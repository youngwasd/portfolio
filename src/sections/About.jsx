import { useActiveSection } from "../useHooks/useActiveSection";
import { LuLinkedin, LuGithub, LuMapPin } from "react-icons/lu";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
    TypographyH2,
    TypographyH4,
    TypographyP,
} from "@/components/Typography";

export const About = ({ setActive }) => {
    useActiveSection("about", setActive);

    return (
        <div className="flex flex-col items-center min-h-screen">
            <Reveal className="text-center" side="right">
                <TypographyH4>GET TO KNOW ME</TypographyH4>
                <TypographyH2 className="subtitle">About Me</TypographyH2>
            </Reveal>
            <Reveal side="right">
                <div className="flex items-center justify-center gap-2 my-4">
                    <LuMapPin /> Seattle, WA
                </div>
            </Reveal>
            <Reveal side="right">
                <div className="flex items-center justify-center ">
                    <TypographyP className="max-w-[40%] text-center">
                        I'm a developer and graduate student at Seattle
                        University, pursuing a Master's in Computer Science with
                        a 4.0 GPA. I earned my Bachelor's degree in Computer
                        Science with a Mathematics minor from the University of
                        Washington, where I co-authored research on evolutionary
                        AI and predator-prey simulations.
                        <br />
                        <br />
                        Through previous internships, I've gained experience
                        across full-stack development, backend integrations,
                        AI-driven features, and UI performance optimization. My
                        projects range from engineering time-tracking web
                        applications to developing neural network-based
                        evolutionary simulations.
                        <br />
                        <br />
                        I'm passionate about creating reliable, user-focused
                        software, whether that means architecting scalable APIs,
                        improving frontend state management, or applying AI to
                        solve real-world problems. I thrive in collaborative
                        environments, value clean, maintainable code, and enjoy
                        tackling complex technical challenges.
                        <br />
                        <br />
                        Feel free to explore my projects below and connect with
                        me.
                    </TypographyP>
                </div>
            </Reveal>
            <Reveal>
                <div className="flex mt-4 gap-4">
                    <Button asChild variant="outline">
                        <a
                            href="https://github.com/youngwasd"
                            className="flex items-center gap-2 hover-lift"
                        >
                            <LuGithub /> youngwasd
                        </a>
                    </Button>
                    <Button asChild variant="outline">
                        <a
                            href="https://www.linkedin.com/in/youngwasd/"
                            className="flex items-center gap-2 hover-lift"
                        >
                            <LuLinkedin /> youngwasd
                        </a>
                    </Button>
                </div>
            </Reveal>
        </div>
    );
};
