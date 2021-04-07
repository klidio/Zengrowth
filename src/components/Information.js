import React from 'react'
import { HiCheckCircle } from "react-icons/hi";
import usc from "../img/usc.png";
import dd from "../img/dd.png";
import pl from "../img/pl.png";
import tv from "../img/tv.png";

const Information = () => {
    return (
        <div>
            <h1>Get In Touch</h1>
            <p>
              Want to see how Zengrowth can help you and your team? We`ll listen
              to your story and propose a data-driven growth plan with channels
              that fit across your costumer journey.
            </p>
            <div className="col-xs-12 col-md-12 col-lg-12 bonus">
              <div className="row">
                <div className="col-1 icon">
                  <HiCheckCircle />
                </div>
                <div className="col-10 txt">
                  <h5>Predictable Lead Generation</h5>
                </div>
              </div>

              <div className="row">
                <div className="col-1 icon">
                  <HiCheckCircle />
                </div>
                <div className="col-9 txt">
                  <h5>Rapid Marketing Experimentation</h5>
                </div>
              </div>

              <div className="row">
                <div className="col-1 icon">
                  <HiCheckCircle />
                </div>
                <div className="col-10 txt">
                  <h5>Lower Customer Acquisition Costs</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-1 icon">
                  <HiCheckCircle />
                </div>
                <div className="col-8 txt">
                  <h5>Predictable Lead Generation</h5>
                </div>
              </div>
            </div>
            <div id="line">
              <hr />
            </div>
            <div className="companies pb3 pt3">
              <h5>Trusted growth partner for hyper-growth companies:</h5>
              <div className="row partners pb3 pt3">
                <div className="col-sm-3 col-lg-6">
                  <img src={tv} />
                </div>
                <div className="col-sm-3 col-lg-6">
                  <img src={dd} />
                </div>
                <div className="col-sm-3 col-lg-6">
                  <img src={usc} />
                </div>
                <div className="col-sm-3 col-lg-6">
                  <img src={pl} />
                </div>
              </div>
            </div>
          </div>       
    )
}
export default Information