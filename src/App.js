import "./App.css";
import Header from "./panels/Header";
import Home from "./Home";
import Footer from "./panels/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Complete from "./components/Complete";
import Information from "./components/Information";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <div className="home">
            <div className="container">
              <div className="row">
                <Route exact path="/">
                  <div className="col-xs-12 order-md-1  col-md-6 form ">
                    <RegisterForm />
                  </div>
                  <div className="col-xs-12  col-md-6 col-lg-6 info ">
                    <Information />
                  </div>
                </Route>
                <Route exact path="/next">
                  <div className="col-xs-12  col-md-6 col-lg-6 info ">
                    <Information />
                  </div>
                  <div className="col-xs-12  col-md-6 col-lg-6 form">
                    <Complete />
                  </div>
                </Route>
                <Route exact path="/blog">
                  <h1 className="white tc pa6 ma6">Blog... Work in progress</h1>
                </Route>
              </div>
            </div>
          </div>
        </Switch>
        <Footer />
      </div>
    </Router>
    /* 
    <div className="App">
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 order-md-1  col-md-6 form ">
              <RegisterForm />
            </div>
            <div className="col-xs-12  col-md-6 col-lg-6 info ">
              <Information />
            </div>

            <div className="col-xs-12  col-md-6 col-lg-6 info ">
              <Complete />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div> */
  );
}

export default App;
/* {route === "home" ? (
  <div>
    
  </div>
) : route === "next" ? (
  
) : (
  <Home/>
    
)} */
