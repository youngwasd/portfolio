import React from 'react';
import { linkedInIcon, gitHubIcon, gmailIcon } from './icons';

export default function Contact() {
    return (
        <div id="contact">
            <div className="card p-4" id="contact-container">
                <p className="fs-4 fw-bold">Get in touch</p>
                <p className="fs-5" style={{ paddingBottom: '1rem' }}>
                    Feel free to message me! Whether you have a question, feedback, or just want to connect, feel free to reach out. You can contact me through the options below.
                </p>
                
                <div className="d-flex pb-3 gap-2" style={{ marginLeft: '-2px'}}>
                    <img className="contactimg" src={gmailIcon} alt="Gmail" height={35} width={35}/>
                    <a
                        href="mailto:youngk126621@gmail.com"
                        className="contact-link"
                    >
                        youngk126621@gmail.com
                    </a>
                </div>

                <div className="d-flex pb-3 gap-2" style={{ marginLeft: '-5px'}}>
                    <img className="contactimg" src={linkedInIcon} alt="LinkedIn" height={38} width={38}/>
                    <a
                        href="https://www.linkedin.com/in/young-k-65b2042b1/"
                        className="contact-link"
                    >
                        young-k
                    </a>
                </div>

                <div className="d-flex gap-2">
                    <img className="contactimg" src={gitHubIcon} alt="GitHub" height={30} width={30}/>
                    <a
                        href="https://github.com/youngwasd"
                        className="contact-link"
                        style={{ paddingLeft: '3px' }}
                    >
                        youngwasd
                    </a>
                </div>
            </div>
        </div>
    );
}