import React from "react";

export const useScreenSize = () => {
    const [screen, setScreen] = React.useState("desktop");

    const updateScreen = () => {
        const width = window.innerWidth;
        if (width < 768) setScreen("mobile");
        else if (width >= 768 && width < 1024) setScreen("tablet");
        else setScreen("desktop");
    };

    React.useEffect(() => {
        updateScreen();
        window.addEventListener("resize", updateScreen);

        return () => window.removeEventListener("resize", updateScreen);
    }, []);

    return {
        isMobile: screen === "mobile",
        isTablet: screen === "tablet",
        isDesktop: screen === "desktop",
    };
};
