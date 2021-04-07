import React from "react";
import RegisterForm from './components/RegisterForm'
import Information from './components/Information'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 order-md-1  col-md-6 form ">
            <RegisterForm />
          </div>
          <div className="col-xs-12  col-md-6 col-lg-6 info ">
            <Information />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
