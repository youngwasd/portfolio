import React from 'react';

export default function Home() {
    return (
        <div id="home">
            <div className="title-container">
                <h1 className="justify-content-start">Hi, I am Young</h1>
                <p 
                    className="text-wrap fs-5"
                    style={{ width: "30rem" }}
                >
                    I am currently pursuing a Master of Science in Computer Science at Seattle University, building on my Bachelor's degree from the University of Washington Tacoma. My academic background is complemented by hands-on experience in software engineering, artificial intelligence, and competitive programming. 
                    <br /><br />
                    I have contributed to multiple projects, including developing evolutionary AI simulations using the NEAT algorithm and designing browser-based games. I thrive in collaborative environments and am passionate about clean code practices, iterative development, and problem-solving. 
                    <br /><br />
                    As an ICPC competitor, I've honed my algorithmic skills under pressure, and as a research assistant, I've co-authored papers and explored new AI modeling techniques. I am always eager to learn, innovate, and apply my knowledge to real-world challenges.
                    <br /><br />
                    Feel free to explore my projects and connect with me through LinkedIn or GitHub.
                    <br /><br />
                </p>
            </div>

            <div className="tech-container">
                <h2 className="justify-content-start">Technology</h2>
                <p className="fs-5">Here are the tools I have experience with.</p>
                {/* add cards to show tech stack */}
            </div>
        </div>
    );
}