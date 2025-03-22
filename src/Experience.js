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