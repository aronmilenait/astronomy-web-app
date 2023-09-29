import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 text-white footer_custom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center mx-auto">
                        <p>© 2023 Astronomy 101. All rights reserved.</p>
                        <p>Made with <FontAwesomeIcon icon={faHeart} className="footer_icon" /> by <a href="https://github.com/aronmilenait" target="_blank" rel="noopener noreferrer">Milena Aron</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
