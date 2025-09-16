import React from "react";
import { linkedInIcon, gitHubIcon, gmailIcon } from "./icons";

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="text-container">
                    <p className="fw-semibold">© Young Kim</p>
                </div>

                <div className="icon-container">
                    <a
                        className="icon-link icon-link-hover"
                        style={{
                            "--bs-icon-link-transform":
                                "translate3d(0, -0.2rem, 0)",
                        }}
                        href="https://www.linkedin.com/in/young-k-65b2042b1/"
                    >
                        <img
                            src={linkedInIcon}
                            alt="LinkedIn"
                            height={38}
                            width={38}
                        />
                    </a>

                    <a
                        className="icon-link icon-link-hover"
                        style={{
                            "--bs-icon-link-transform":
                                "translate3d(0, -0.2rem, 0)",
                        }}
                        href="https://github.com/youngwasd"
                    >
                        <img
                            src={gitHubIcon}
                            alt="GitHub"
                            height={30}
                            width={30}
                        />
                    </a>

                    <a
                        className="icon-link icon-link-hover"
                        style={{
                            "--bs-icon-link-transform":
                                "translate3d(0, -0.2rem, 0)",
                        }}
                        href="mailto:youngworking110@gmail.com"
                    >
                        <img
                            src={gmailIcon}
                            alt="Gmail"
                            height={35}
                            width={35}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
