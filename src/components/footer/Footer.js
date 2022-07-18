import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer__container container">
            <h1 className="footer__title">my social networks;</h1>
            <ul className="footer__social">
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaWhatsapp />
                </li>

            </ul>
            <div className="footer__copy">
                &#169;QëndrimRexhepi
            </div>
        </div>
    )
}

export default Footer