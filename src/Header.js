import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
        <header>
            <div className="header-content">
                <h1 className="m-0 fs-3">Young's Page</h1>

                <div className="tabs">
                    {/* <a className="btn btn-primary" href="resume/YoungKim_Resume_2025.pdf" download="resume.pdf">Download Resume/CV</a> */}
                    
                    <nav className="nav nav-underline justify-content-end">
                        <Link 
                            className={location.pathname==="/home" ? "nav-link active" : "nav-link"} 
                            aria-current="page" 
                            to="/home"
                        >
                            Home
                        </Link>

                        <Link
                            className={location.pathname==="/projects" ? "nav-link active" : "nav-link"}
                            to="/projects"
                        >
                            Projects
                        </Link>

                        <Link 
                            className={location.pathname==="/experience" ? "nav-link active" : "nav-link"}
                            to="/experience"
                        >
                            Experience
                        </Link>

                        <Link 
                            className={location.pathname==="/education" ? "nav-link active" : "nav-link"}
                            to="/education"
                        >
                            Education
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}