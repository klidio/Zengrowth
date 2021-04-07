import React from "react";
import logo from "../img/log1.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXingSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12 col-lg-6 footer-logo">
            <a href="https://zengrowth.de/get-started/">
              <img src={logo} />
            </a>
          </div>
          <div className="col-md-6 col-xs-12 col-lg-6 social">
            <a href="https://www.xing.com/en" style={{color:"black"}}><FaXingSquare/></a>
            <a href="https://www.linkedin.com/" style={{color:"black"}}><AiOutlineLinkedin/></a>
            
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 date">
            <p>© {new Date().getFullYear()} Zengrowth. All rights reserved.</p>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="row tr links ">
                <div className="col-3"><p href="/AGB/">AGB</p></div>
                <div className="col-3"><p href="/Privacy/">Privacy</p></div>
                <div className="col-3"><p href="/Cookies/">Cookies</p></div>
                <div className="col-3"><p href="/Impressum/">Impressum</p></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
