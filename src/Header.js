import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import resume from "./resume/YoungKim_Resume_2025.pdf";

export default function Header() {
    const location = useLocation();

    return (
        <header>
            <div className="header-content">
                <h1 className="m-0 fs-3">Young's Page</h1>

                <div className="tabs d-flex gap-3">
                    <a 
                        className="btn btn-secondary btn-sm d-flex justify-content-center align-items-center fw-bold"
                        href={resume}
                        download="YoungKim_Resume_2025.pdf"
                    >
                        Download Resume/CV
                    </a>
                    
                    <nav className="nav nav-underline justify-content-end">
                        <Link 
                            className={location.pathname==="/" ? "nav-link active" : "nav-link"} 
                            aria-current="page" 
                            to="/"
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

                        <Link 
                            className={location.pathname==="/contact" ? "nav-link active" : "nav-link"}
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}