import React from 'react';
import "./footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to step into the future before others
                </h1>
            </div>
            <div className="gpt3__footer-button">
                <button className="btn" type="submit">Request early access</button>
            </div>

                <div className="gpt3__footer-links_logo">
                    <img src={logo}
                        alt="logo"/>

                </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Over-runs</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contacts</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>Contacts</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Granivale St. George</p>
                    <p>473-(405-4337)</p>
                    <p>elec_eng2020@hotmail.com</p>
                </div>

            </div>

            <div className="gpt3__footer-copyright">
            <p>
            &copy; <span id="date">2021</span>
            Built by <a href="http://resumeop.netlify.app/">Oketo Peters</a>
        </p>
            </div>
        </div>
    );
}

export default Footer;
