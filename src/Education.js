import React from 'react';
import { seattleu, uw, pierce } from './icons'

export default function Education() {
    return (
        <div id="education">
            <div id="education-container">
                <p className="fs-2">Education</p>
                <p className="fs-5">Here is my education history.</p>

                <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                    <div className="col">
                        <div className="card">
                            <img src={seattleu} className="card-img-top bg-white" alt="Seattle University" />
                            <div className="education-card-body p-3">
                                <p className="education-card-title fs-5">Seattle University</p>
                                <p className="card-subtitle">Master of Science in Computer Science – Seattle, WA <span>2025 - 2028</span></p>
                                <p className="card-text mt-2">
                                    I am set to begin my journey toward a Master’s degree in Computer Science to build upon my strong academic foundation. With a strong commitment to deepen and expand my knowledge and skill in my field. I aim to engage in advanced learning, problem-solving, and communication, further preparing myself for an impactful contribution to the tech industry.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={uw} className="card-img-top bg-white p-3" alt="Seattle University" />
                            <div className="education-card-body p-3">
                                <p className="education-card-title fs-5">University of Washington</p>
                                <p className="card-subtitle text-wrap">
                                    Bachelor of Science in Computer Science & Systems,<br />Minor in Mathematics – Tacoma, WA <span className="mt-auto">2021 - 2024</span></p>
                                <p className="card-text mt-2">
                                    My transition from high school to university, facilitated by prior experience in the Running Start program, was seamless. Acquainted with the rigor of university-level coursework, I approached my studies with diligence and determination to attain a commendable GPA. Throughout my tenure at UWT, I maintained a consistent GPA of 3.81, earning recurrent placement on the Dean’s List. This steadfast commitment to academic excellence underscores my disciplined work ethic and adaptability in academic settings.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={pierce} className="card-img-top bg-white p-3" alt="Seattle University" />
                            <div className="education-card-body p-3">
                                <p className="education-card-title fs-5">Pierce College</p>
                                <p className="card-subtitle">Associate in Arts - Direct Transfer Agreement – Puyallup, WA <span>2019 - 2021</span></p>
                                <p className="card-text mt-2">
                                    Commencing Pierce College as a Running Start student during junior year sparked a commitment to academic excellence. With focused effort, I attained a 3.88 GPA at graduation, earning frequent placements on the Dean’s and President’s Lists. These achievements reflect my dedication to learning and scholarly growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}