import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Complete = () => {
  return (
    <div className="done">
      <div className="done-icon tc" >
        <AiFillCheckCircle />
      </div>
      <div className="tc pt2 pb2">
        <h3 >Thank you for your interest</h3>
        <h6>We`ll get in touch with you very soon</h6>
      </div>
      <div className="tc pt2 pb2">
        <h6>
          <b>P.S</b> in the meantime,learn more about growth marketing stategies
          <Link to="/blog"><h6 >from our blog</h6></Link>
          
        </h6>
      </div>
    </div>
  );
};
export default Complete;