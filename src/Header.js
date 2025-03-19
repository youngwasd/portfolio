import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
        <header>
            <div className="header-content">
                <h1 className="m-0 fs-3">Young's Page</h1>

                <div className="tabs">
                    <nav className="nav nav-underline justify-content-end">
                        <a 
                            className={location.pathname==="/" ? "nav-link active" : "nav-link"} 
                            aria-current="page" 
                            href="/"
                        >
                            Home
                        </a>

                        <a
                            className={location.pathname==="/projects" ? "nav-link active" : "nav-link"}
                            href="/projects"
                        >
                            Projects
                        </a>

                        <a 
                            className={location.pathname==="/experience" ? "nav-link active" : "nav-link"}
                            href="/experience"
                        >
                            Experience
                        </a>

                        <a 
                            className={location.pathname==="/education" ? "nav-link active" : "nav-link"}
                            href="/education"
                        >
                            Education
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}