import { useEffect, useState } from "react";

interface Raindrop {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
}

export const RainAnimation = () => {
    const [raindrops, setRaindrops] = useState<Raindrop[]>([]);
    useEffect(() => {
        const drops: Raindrop[] = [];

        // Create 200 raindrops with random properties
        for (let i = 0; i < 200; i++) {
            drops.push({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 2,
                duration: 1 + Math.random() * 1,
                size: 2 + Math.random() * 3,
            });
        }

        setRaindrops(drops);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {raindrops.map((drop) => (
                <div
                    key={drop.id}
                    className="absolute bg-white opacity-60"
                    style={{
                        left: `${drop.x}%`,
                        width: `${drop.size}px`,
                        height: `${drop.size * 4}px`,
                        borderRadius: "50px",
                        animation: `fall ${drop.duration}s linear ${drop.delay}s infinite`,
                        background:
                            "linear-gradient(to bottom, transparent, rgb(255, 255, 255))",
                    }}
                />
            ))}
        </div>
    );
};
