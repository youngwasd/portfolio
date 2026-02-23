import React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Education } from "./sections/Education";
import { Projects } from "./sections/Projects";
import { Technology } from "./sections/Technology";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Contact } from "./sections/Contact";
import { About } from "./sections/About";
import {
    TypographyH3,
    TypographyP,
    TypographyMuted,
} from "@/components/Typography";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    LuCodeXml,
    LuGithub,
    LuLinkedin,
    LuMail,
    LuHouse,
    LuSquareUserRound,
    LuSquareCode,
    LuBackpack,
    LuBriefcase,
} from "react-icons/lu";
import { useScreenSize } from "@/useHooks/useScreenSize";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const Home = () => {
    const [active, setActive] = React.useState("hero");
    const { isMobile, isTablet } = useScreenSize();
    const navIconSize = 20;

    return (
        <>
            {isMobile || isTablet ? (
                <Card className="flex flex-col justify-center items-center w-72 mx-auto mt-40">
                    <CardHeader>
                        <CardTitle>
                            Please view on a desktop device to see the full
                            experience!
                        </CardTitle>
                        <CardDescription className="mt-4">
                            I apologize for the inconvenience, but at this
                            moment my portfolio is only optimized for desktop
                            viewing. I'm actively working on making it
                            responsive for all devices, so please check back
                            soon for updates.
                            <br />
                            <br />
                            You may find my contact information below if you'd
                            like to reach out in the meantime.
                            <br />
                            <br />
                            Thank you for your understanding!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <a
                            href="mailto:youngworking110@gmail.com"
                            className="flex items-center gap-2 hover-lift hover-lift-glow"
                        >
                            <LuMail /> youngworking110@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/youngwasd/"
                            className="flex items-center gap-2 hover-lift hover-lift-glow"
                        >
                            <LuLinkedin /> youngwasd
                        </a>

                        <a
                            href="https://github.com/youngwasd"
                            className="flex items-center gap-2 hover-lift hover-lift-glow"
                        >
                            <LuGithub /> youngwasd
                        </a>
                    </CardContent>
                </Card>
            ) : (
                <div className="min-w-screen">
                    <div className="fixed top-0 left-1/2 -translate-x-1/2 mt-4 backdrop-blur-xl rounded-3xl z-50">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem className="navbar">
                                    <NavigationMenuLink asChild>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <a
                                                        href="#hero"
                                                        className={`${
                                                            active === "hero"
                                                                ? "nav-link active"
                                                                : "nav-link"
                                                        } hover-lift`}
                                                    >
                                                        <LuHouse
                                                            size={navIconSize}
                                                        />
                                                    </a>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Home</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <a
                                                        href="#about"
                                                        className={`${
                                                            active === "about"
                                                                ? "nav-link active"
                                                                : "nav-link"
                                                        } hover-lift`}
                                                    >
                                                        <LuSquareUserRound
                                                            size={navIconSize}
                                                        />
                                                    </a>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>About</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <a
                                                        href="#technology"
                                                        className={`${
                                                            active ===
                                                            "technology"
                                                                ? "nav-link active"
                                                                : "nav-link"
                                                        } hover-lift`}
                                                    >
                                                        <LuCodeXml
                                                            size={navIconSize}
                                                        />
                                                    </a>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Skills</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <a
                                                        href="#experience"
                                                        className={`${
                                                            active ===
                                                            "experience"
                                                                ? "nav-link active"
                                                                : "nav-link"
                                                        } hover-lift`}
                                                    >
                                                        <LuBriefcase
                                                            size={navIconSize}
                                                        />
                                                    </a>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Experience</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <a
                                                        href="#projects"
                                                        className={`${
                                                            active ===
                                                            "projects"
                                                                ? "nav-link active"
                                                                : "nav-link"
                                                        } hover-lift`}
                                                    >
                                                        <LuSquareCode
                                                            size={navIconSize}
                                                        />
                                                    </a>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Projects</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <a
                                                        href="#education"
                                                        className={`
                                                        ${
                                                            active ===
                                                            "education"
                                                                ? "nav-link active"
                                                                : "nav-link"
                                                        } hover-lift`}
                                                    >
                                                        <LuBackpack
                                                            size={navIconSize}
                                                        />
                                                    </a>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Education</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <a
                                                        href="#contact"
                                                        className={`
                                                        ${
                                                            active === "contact"
                                                                ? "nav-link active"
                                                                : "nav-link"
                                                        } hover-lift`}
                                                    >
                                                        <LuMail
                                                            size={navIconSize}
                                                        />
                                                    </a>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Contact</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <section id="hero">
                        <Hero setActive={setActive} />
                    </section>

                    <section id="about" className="scroll-mt-24">
                        <About setActive={setActive} />
                    </section>

                    <section id="technology" className="scroll-mt-24">
                        <Technology setActive={setActive} />
                    </section>

                    <section id="experience" className="scroll-mt-24">
                        <Experience setActive={setActive} />
                    </section>

                    <section id="projects" className="scroll-mt-24">
                        <Projects setActive={setActive} />
                    </section>

                    <section id="education" className="scroll-mt-24">
                        <Education setActive={setActive} />
                    </section>

                    <section id="contact">
                        <Contact setActive={setActive} />
                    </section>

                    <div className="flex w-full items-center justify-between border-t py-10 px-96">
                        <div className="flex">
                            <div className="mt-1 mr-3">
                                <LuCodeXml size={30} />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <TypographyH3 className="subtitle mb-0">
                                    Young Kim
                                </TypographyH3>
                                <TypographyP>Developer</TypographyP>
                            </div>
                        </div>

                        <div className="flex gap-10">
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
                            <Button
                                asChild
                                variant="outline"
                                size="icon"
                                className="hover-lift"
                            >
                                <a href="mailto:youngworking110@gmail.com">
                                    <LuMail />
                                </a>
                            </Button>
                        </div>

                        <div>
                            <TypographyP>© Young Kim</TypographyP>
                            <TypographyMuted>
                                Built with ❤️ and code
                            </TypographyMuted>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
