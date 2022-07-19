import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <h1 className="footer-title">my social networks;</h1>
            <ul className="footer-social">
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
        </div>
    )
}

export default Footer