import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section id="contact_section">
            <div className="container mt-5">
                <h3 className="display-4 text-center mb-4 text-white">Contact</h3>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card card_custom">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faGithub} className="fa-3x mb-3 icon" />
                                <p className="card_title"><a href="https://github.com/aronmilenait" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card card_custom">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faLinkedin} className="fa-3x mb-3 icon" />
                                <p className="card_title"><a href="https://www.linkedin.com/in/milena-aron-797b2b1b8/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card card_custom">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faEnvelope} className="fa-3x mb-3 icon" />
                                <p className="card_title"><a href="mailto:aronmilena.it@gmail.com">aronmilena.it@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
