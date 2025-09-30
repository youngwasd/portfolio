import { useEffect } from "react";

export const useActiveSection = (id, setActive) => {
    useEffect(() => {
        const section = document.getElementById(id);
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, [id, setActive]);
};
