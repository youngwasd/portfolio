import { useActiveSection } from "../useHooks/useActiveSection";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LuLinkedin, LuMail, LuGithub } from "react-icons/lu";
import { Reveal } from "@/components/Reveal";
import { TypographyH2 } from "@/components/Typography";

export const Contact = ({ setActive }) => {
    useActiveSection("contact", setActive);

    return (
        <div className="flex flex-col mt-40 mb-24 justify-center items-center">
            <Reveal className="mb-4">
                <TypographyH2 className="subtitle">Get In Touch</TypographyH2>
            </Reveal>

            <Reveal>
                <Card className="w-full max-w-md mt-4">
                    <CardHeader>
                        <CardTitle className="text-center">
                            Connect With Me!
                        </CardTitle>
                        <CardDescription>
                            Feel free to message me! Whether you have a
                            question, feedback, or just want to connect, feel
                            free to reach out. You can contact me through the
                            options below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-4">
                        <a
                            href="mailto:youngworking110@gmail.com"
                            className="flex items-center gap-2 hover-lift hover-lift-glow max-w-[60%]"
                        >
                            <LuMail /> youngworking110@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/young-k-65b2042b1/"
                            className="flex items-center gap-2 hover-lift hover-lift-glow max-w-[22%]"
                        >
                            <LuLinkedin /> young-k
                        </a>

                        <a
                            href="https://github.com/youngwasd"
                            className="flex items-center gap-2 hover-lift hover-lift-glow max-w-[26%]"
                        >
                            <LuGithub /> youngwasd
                        </a>
                    </CardContent>
                </Card>
            </Reveal>
        </div>
    );
};
