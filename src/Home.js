import React from 'react';
import {
    gitHubIcon, msIcon, aws, bootstrap, docker, flask, gimp, git, c, java, javascript, css, html,
    mysql, node, postgres, python, react, google, intellij, junit, r, unity, pycharm, postman, ubuntu, erlang,
    overleaf, pfp, express, vscode, visualstudio, dotnet, typescript, sql, mongodb, nextjs, fastapi, azure, csharp
} from './icons';

export default function Home() {
    return (
        <>
            <div id="home">
                <div className="title-container">
                    <p className="justify-content-start fs-2">Hi, I'm Young</p>
                    <p 
                        className="text-wrap mb-2 fs-5"
                        style={{ width: "30rem" }}
                    >
                        I'm a software engineer and graduate student at Seattle University pursuing a Master's in Computer Science. I previously earned my Bachelor's degree from the University of Washington, where I focused on software engineering and artificial intelligence.
                    </p>

                    <p
                        className="text-wrap mb-2 fs-5"
                        style={{ width: "30rem" }}
                    >
                        I've gained hands-on experience through internships at Bilimetrix and Hawl Technologies, where I worked on backend integrations, frontend state management, and AI-driven product features. My projects span from evolutionary AI simulations using the NEAT algorithm to full-stack web applications and research in AI modeling.
                    </p>

                    <p
                        className="text-wrap mb-2 fs-5"
                        style={{ width: "30rem" }}
                    >
                        I'm passionate about building reliable, user-focused software, whether that means optimizing backend systems, improving UI performance, or exploring new approaches to applied AI. I thrive in collaborative environments, value clean and maintainable code, and enjoy tackling complex technical challenges.
                    </p>

                    <p
                        className="text-wrap mb-2 fs-5"
                        style={{ width: "30rem" }}
                    >
                        Feel free to explore my projects and connect with me on LinkedIn or GitHub!
                    </p>
                </div>
            
                <div className="pfp">
                        <img src={pfp} class="img-thumbnail" alt="cat"></img>
                </div>
            </div>
    
            <div className="tech-container">
                <p className="justify-content-start fs-2"><br /> Technology</p>
                <p className="fs-5">Here are the tools I have experience with.</p>

                <div id="card-container">
                    <div className="card mb-3" style={{ maxWidth: "20rem" }}>
                        <div className="card-header">Languages</div>
                        <div className="card-body">

                            <div className="logo-container">
                                <img src={javascript} class="img-thumbnail" alt="JavaScript"></img>
                                <span className="logo-text">JavaScript</span>
                            </div>

                            <div className="logo-container">
                                <img src={typescript} class="img-thumbnail" alt="TypeScript"></img>
                                <span className="logo-text">TypeScript</span>
                            </div>

                            <div className="logo-container"> 
                                <img src={python} class="img-thumbnail" alt="Python"></img>
                                <span className="logo-text">Python</span>
                            </div>

                            <div className="logo-container">
                                <img src={java} class="img-thumbnail" alt="Java"></img>
                                <span className="logo-text">Java</span>
                            </div>
                           
                            <div className="logo-container">
                                <img src={csharp} class="img-thumbnail" alt="C#"></img>
                                <span className="logo-text">C#</span>
                            </div>

                            <div className="logo-container">
                                <img src={c} class="img-thumbnail" alt="C"></img>
                                <span className="logo-text">C</span>
                            </div>

                            <div className="logo-container">
                                <img src={html} class="img-thumbnail" alt="HTML"></img>
                                <span className="logo-text">HTML</span>
                            </div>

                            <div className="logo-container">
                                <img src={css} class="img-thumbnail" alt="CSS"></img>
                                <span className="logo-text">CSS</span>
                            </div>

                            <div className="logo-container">
                                <img src={sql} class="img-thumbnail" alt="SQL"></img>
                                <span className="logo-text">SQL</span>
                            </div>

                            <div className="logo-container">
                                <img src={erlang} class="img-thumbnail" alt="Erlang"></img>
                                <span className="logo-text">Erlang</span>
                            </div>

                            <div className="logo-container">
                                <img src={r} class="img-thumbnail" alt="R"></img>
                                <span className="logo-text">R</span>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "20rem" }}>
                        <div className="card-header">Backend</div>
                        <div className="card-body">
                            <div className="logo-container">
                                <img src={node} class="img-thumbnail" alt="Node.js"></img>
                                <span className="logo-text">Node.js</span>
                            </div>

                            <div className="logo-container">
                                <img src={express} class="img-thumbnail" alt="Express.js"></img>
                                <span className="logo-text">Express.js</span>
                            </div>

                            <div className="logo-container">
                                <img src={fastapi} class="img-thumbnail" alt="FastAPI"></img>
                                <span className="logo-text">FastAPI</span>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "20rem" }}>
                        <div className="card-header">Frontend</div>
                        <div className="card-body">
                            <div className="logo-container">
                                <img src={react} class="img-thumbnail" alt="React.js"></img>
                                <span className="logo-text">React.js</span>
                            </div>

                            <div className="logo-container">
                                <img src={nextjs} class="img-thumbnail" alt="Next.js"></img>
                                <span className="logo-text">Next.js</span>
                            </div>

                            <div className="logo-container">
                                <img src={java} class="img-thumbnail" alt="Java Swing"></img>
                                <span className="logo-text">Java Swing</span>
                            </div>

                            <div className="logo-container">
                                <img src={python} class="img-thumbnail" alt="Tkinter"></img>
                                <span className="logo-text">Tkinter</span>
                            </div>                            
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "20rem" }}>
                        <div className="card-header">Frameworks & Libraries</div>
                        <div className="card-body">
                            <div className="logo-container">
                                <img src={dotnet} class="img-thumbnail" alt=".NET"></img>
                                <span className="logo-text">.NET</span>
                            </div>

                            <div className="logo-container">
                                <img src={flask} class="img-thumbnail" alt="Flask"></img>
                                <span className="logo-text">Flask</span>
                            </div>

                            <div className="logo-container">
                                <img src={junit} class="img-thumbnail" alt="JUnit"></img>
                                <span className="logo-text">JUnit</span>
                            </div>  

                            <div className="logo-container">
                                <img src={bootstrap} class="img-thumbnail" alt="Bootstrap"></img>
                                <span className="logo-text">Bootstrap</span>
                            </div>  
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "20rem" }}>
                        <div className="card-header">Tools</div>
                        <div className="card-body">
                            <div className="logo-container">
                                <img src={aws} class="img-thumbnail" alt="AWS"></img>
                                <span className="logo-text">AWS</span>
                            </div>

                            <div className="logo-container">
                                <img src={azure} class="img-thumbnail" alt="Azure"></img>
                                <span className="logo-text">Azure</span>
                            </div>

                            <div className="logo-container">
                                <img src={docker} class="img-thumbnail" alt="Docker"></img>
                                <span className="logo-text">Docker</span>
                            </div>  

                            <div className="logo-container">
                                <img src={git} class="img-thumbnail" alt="Git"></img>
                                <span className="logo-text">Git</span>
                            </div>

                            <div className="logo-container">
                                <img src={gitHubIcon} class="img-thumbnail" alt="GitHub"></img>
                                <span className="logo-text">GitHub</span>
                            </div>  

                            <div className="logo-container">
                                <img src={ubuntu} class="img-thumbnail" alt="Ubuntu"></img>
                                <span className="logo-text">Ubuntu</span>
                            </div> 

                            <div className="logo-container">
                                <img src={postman} class="img-thumbnail" alt="Postman"></img>
                                <span className="logo-text">Postman</span>
                            </div>

                            <div className="logo-container">
                                <img src={pycharm} class="img-thumbnail" alt="PyCharm"></img>
                                <span className="logo-text">PyCharm</span>
                            </div>  

                            <div className="logo-container">
                                <img src={intellij} class="img-thumbnail" alt="Intellij"></img>
                                <span className="logo-text">Intellij</span>
                            </div> 

                            <div className="logo-container">
                                <img src={overleaf} class="img-thumbnail" alt="Overleaf"></img>
                                <span className="logo-text">Overleaf</span>
                            </div>  
                            
                            <div className="logo-container">
                                <img src={unity} class="img-thumbnail" alt="Unity"></img>
                                <span className="logo-text">Unity</span>
                            </div>

                            <div className="logo-container">
                                <img src={vscode} class="img-thumbnail" alt="VS Code"></img>
                                <span className="logo-text">VS Code</span>
                            </div>

                            <div className="logo-container">
                                <img src={visualstudio} class="img-thumbnail" alt="Visual Studio"></img>
                                <span className="logo-text">Visual Studio</span>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "20rem" }}>
                        <div className="card-header">Database</div>
                        <div className="card-body">
                            <div className="logo-container">
                                <img src={postgres} class="img-thumbnail" alt="PostGresSQL"></img>
                                <span className="logo-text">PostGresSQL</span>
                            </div>

                            <div className="logo-container">
                                <img src={mongodb} class="img-thumbnail" alt="MongoDB"></img>
                                <span className="logo-text">MongoDB</span>
                            </div>

                            <div className="logo-container">
                                <img src={mysql} class="img-thumbnail" alt="MySQL"></img>
                                <span className="logo-text">MySQL</span>
                            </div>                            
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "20rem" }}>
                        <div className="card-header">Other</div>
                        <div className="card-body">
                            <div className="logo-container">
                                <img src={gimp} class="img-thumbnail" alt="GIMP"></img>
                                <span className="logo-text">GIMP</span>
                            </div>

                            <div className="logo-container">
                                <img src={google} class="img-thumbnail" alt="Google Workspace"></img>
                                <span className="logo-text">Google Workspace</span>
                            </div>

                            <div className="logo-container">
                                <img src={msIcon} class="img-thumbnail" alt="Microsoft 365"></img>
                                <span className="logo-text">Microsoft 365</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}