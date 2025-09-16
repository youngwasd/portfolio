import React from "react";
import {
    neat,
    holo,
    flappybird,
    weather,
    quote,
    ai,
    calc,
    pfp,
    track,
} from "./icons";

export default function Projects() {
    return (
        <div id="projects">
            <div id="project-container">
                <p className="fs-2">Projects</p>
                <p className="fs-5">
                    Here are the projects I am working on, some projects are not
                    listed.
                </p>

                <div className="row row-cols-md-3 g-4 mb-5">
                    <div className="col">
                        <div className="card">
                            <img
                                src={neat}
                                className="card-img-top"
                                alt="NEAT Hunting and Gathering"
                            ></img>
                            <div className="project-card-body p-3">
                                <p className="card-title fs-5">
                                    NEAT Hunting and Gathering
                                </p>
                                <p className="card-text">
                                    I helped develop a web-based simulation
                                    using the NEAT algorithm, where AI robots
                                    evolve through prey/predator dynamics. I
                                    focused on implementing binocular vision to
                                    improve robot perception and survival. The
                                    project was built with HTML, CSS, and
                                    JavaScript and hosted on GitHub Pages.
                                </p>
                                <a
                                    href="https://osdreamscape.github.io/NEAT-Hunting-and-Gathering/"
                                    className="btn btn-primary"
                                >
                                    Click here to view
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={track}
                                className="card-img-top"
                                alt="SeaTrack"
                            ></img>
                            <div className="project-card-body p-3">
                                <p className="card-title fs-5">SeaTrack</p>
                                <p className="card-text">
                                    Web-based full-stack time-tracking
                                    application, built to be an efficient time
                                    and task tracking app. We are developing the
                                    app to allow for users to log, view, and
                                    manage their time through a clean intuitive
                                    interface. This application was built with
                                    React, Node.js, and Express.js. The user
                                    credentials and logs are managed using a
                                    PostGresSQL database.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={holo}
                                className="card-img-top"
                                alt="Holo Leveling"
                            ></img>
                            <div className="project-card-body p-3">
                                <p className="card-title fs-5">Holo Leveling</p>
                                <p className="card-text">
                                    I collaborated with a team of three to
                                    develop a roguelike web game from scratch
                                    using JavaScript and HTML. We implemented an
                                    interactive UI and integrated game/asset
                                    physics. We made sure to focus on iterative
                                    development, code reviews, and writing
                                    modular code to ensure maintainability. We
                                    often tested gameplay features for quality
                                    assurance.
                                </p>
                                <a
                                    href="https://youngwasd.github.io/HoloLeveling/"
                                    className="btn btn-primary"
                                >
                                    Click here to view
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={flappybird}
                                className="card-img-top"
                                alt="Flappy Bird"
                            ></img>
                            <div className="project-card-body p-3">
                                <p className="card-title fs-5">Flappy Bird</p>
                                <p className="card-text">
                                    Developed a full-stack browser-based version
                                    of Flappy Bird using JavaScript and HTML.
                                    Building both the front-end and back-end
                                    components. Engineered custom game logic and
                                    asset handling, while attempting to ensure
                                    seamless gameplay across devices. Deployed
                                    the complete game to AWS S3, ensuring public
                                    accessibility and smooth performance.
                                </p>
                                <a
                                    href="http://flappybird-young.s3-website-us-west-2.amazonaws.com/"
                                    className="btn btn-primary"
                                >
                                    Click here to view
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={pfp}
                                className="card-img-top"
                                alt="Portfolio"
                            ></img>
                            <div className="project-card-body p-3">
                                <p className="card-title fs-5">Portfolio</p>
                                <p className="card-text">
                                    Building a personal portfolio website to
                                    showcase my projects and skills, featuring a
                                    responsive design and seamless navigation
                                    with React, HTML, CSS, and JavaScript. The
                                    site includes sections for my work,
                                    experience, and education, with an
                                    interactive UI for a user-friendly browsing
                                    experience.
                                </p>
                                <a
                                    href="https://youngwasd.github.io/portfolio/"
                                    className="btn btn-primary"
                                >
                                    Click here to view
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={ai}
                                className="card-img-top"
                                alt="Simple AI"
                            ></img>
                            <div className="project-card-body p-3">
                                <p className="card-title fs-5">Simple AI</p>
                                <p className="card-text">
                                    I developed a ChatGPT replica using the
                                    OpenAI API to create an interactive web app
                                    with JavaScript, HTML, and CSS, enabling
                                    users to engage with a conversational AI
                                    model.
                                </p>
                                <a
                                    href="https://github.com/youngwasd/simple_ai"
                                    className="btn btn-primary"
                                >
                                    Click here to view
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={weather}
                                className="card-img-top"
                                alt="Weather App"
                            ></img>
                            <div className="project-card-body p-3">
                                <p className="card-title fs-5">Weather App</p>
                                <p className="card-text">
                                    I developed a weather application using
                                    Python, Flask, and HTML that integrates with
                                    the OpenWeatherMap API to provide real-time
                                    weather data. The app allows users to search
                                    for weather information by city, displaying
                                    details such as temperature, and weather
                                    conditions in a simple, responsive
                                    interface.
                                </p>
                                <a
                                    href="https://github.com/youngwasd/weather_app/"
                                    className="btn btn-primary"
                                >
                                    Click here to view
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={calc}
                                className="card-img-top"
                                alt="Calculator"
                            ></img>
                            <div className="project-card-body p-3">
                                <p className="card-title fs-5">Calculator</p>
                                <p className="card-text">
                                    I developed a simple calculator application
                                    using Python and Tkinter. Implemented basic
                                    arithmetic operations such as addition,
                                    subtraction, multiplication, and division.
                                    Designed an intuitive graphical user
                                    interface (GUI) to enhance user experience.
                                    Focused on modular code to ensure easy
                                    maintainability and scalability of the app
                                </p>
                                <a
                                    href="https://github.com/youngwasd/calculator_py"
                                    className="btn btn-primary"
                                >
                                    Click here to view
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img
                                src={quote}
                                className="card-img-top"
                                alt="Quote-Generator"
                            ></img>
                            <div className="project-card-body p-3">
                                <p className="card-title fs-5">
                                    Quote Generator
                                </p>
                                <p className="card-text">
                                    Developed a web app that integrates with the
                                    API Ninjas API to fetch and display random
                                    quotes using Python, Flask, and HTML. The
                                    app showcases the quote's content, author,
                                    and category in a user-friendly interface.
                                    Implemented efficient API calls, ensuring
                                    smooth data retrieval and dynamic content
                                    updates for a seamless user experience.
                                </p>
                                <a
                                    href="https://github.com/youngwasd/quote-generator"
                                    className="btn btn-primary"
                                >
                                    Click here to view
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
