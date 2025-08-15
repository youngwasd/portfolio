import React from 'react';

export default function Experience() {
    return (
        <div id="experience">
            <div id="experience-container">
                <p className="fs-2">Experience</p>
                <p className="fs-5">Here is my current experience history.</p>

                <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                    <div className="col">
                        <div className="card">
                            <div className="experience-card-body p-3">
                                <p className="experience-card-title fs-5">Software Engineer Intern</p>
                                <p className="card-subtitle">Hawl Technologies, LLC <span>2025 - Present</span></p>
                                <p className="card-text mt-2">
                                    During my internship at Hawl Technologies, I contributed as a software engineer on multiple projects. I developed and maintained core features of the AI Case Interview platform, implementing interactive video editing and captioning capabilities enhanced with text-to-speech technology to improve accessibility and user engagement. Additionally, I played a key role in building their second product product, designing backend functionalities such as file upload integration, AI API prompt enrichment, and persistent user settings storage using MongoDB with session fallback for guests. Collaborating within an Agile team, I participated in sprint planning, peer code reviews, and bug fixing, while optimizing frontend state management in a React and TypeScript environment to enhance UI responsiveness and overall user experience. Throughout, I ensured adherence to best practices in version control, testing, and documentation to deliver reliable, maintainable software.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <div className="experience-card-body p-3">
                                <p className="experience-card-title fs-5">Software Engineer Intern</p>
                                <p className="card-subtitle">Bilimetrix USA <span>2025 - Present</span></p>
                                <p className="card-text mt-2">
                                    At Bilimetrix, I worked as a software engineering intern focusing on improving the usability and reliability of their diagnostic platform. I enhanced the user interface by reorganizing page layouts and integrating detailed clinical data such as lab values, improving clarity and user workflow. To boost testing efficiency and maintain high code quality, I refactored unit tests by creating centralized helper modules for shared mock data, reducing redundancy and improving maintainability. I also engineered an image analysis detector that identifies shadows by analyzing pixel color data, contributing to improved diagnostic accuracy. Throughout my work, I maintained 100% code coverage, ensuring robust and reliable code while collaborating closely with cross-functional teams to deliver consistent improvements.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <div className="experience-card-body p-3">
                                <p className="experience-card-title fs-5">Undergraduate Research Assistant</p>
                                <p className="card-subtitle">University of Washington – Tacoma, WA <span>2023 - 2024</span></p>
                                <p className="card-text mt-2">
                                    I contributed to an undergraduate research team focused on studying and simulating evolutionary robotics, specifically exploring prey/predator relationships. We utilized the NEAT (NeuroEvolution of Augmenting Topologies) algorithm to analyze and model complex behavioral dynamics within simulated environments. This experience enhanced my understanding of evolutionary algorithms and their applications in artificial intelligence and robotics research.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <div className="experience-card-body p-3">
                                <p className="experience-card-title fs-5">ICPC Competitor</p>
                                <p className="card-subtitle">University of Washington – Tacoma, WA <span>2023 - 2024</span></p>
                                <p className="card-text mt-2">
                                    Competed in multiple editions of the International Collegiate Programming Contest (ICPC), solving complex algorithmic problems under strict time constraints. Worked collaboratively in a team of three to analyze, strategize, and implement efficient solutions using Java. Through this, I gained hands-on experience with data structures, dynamic programming, graph algorithms, and combinatorics while enhancing teamwork, time management, and critical thinking skills in a high-pressure environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}