import React, { Component } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormGroup, Input,Button} from "reactstrap";
import Complete from './Complete'
import {Link} from 'react-router-dom'

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
      
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["name"] = "";
      input["lastName"] = "";
      input["email"] = "";
      input["phoneNumber"] = [];
      input["comment"] = "";
      input["checkbox"] = "";
      // (input["checkboxValid"] = false), (input["selectedCheckBox"] = 0);
    }
  }
 

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }
    if (!input["lastName"]) {
      isValid = false;
      errors["lastName"] = "Please enter your last name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Must be a valid business email address.";
    }
    if (!input["checkbox"]) {
      isValid = false;
      errors["checkbox"] = "Please select one";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["comment"]) {
      isValid = false;
      errors["comment"] = "Please enter your comment.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }
  validateForm = () => {
    const { checkboxValid } = this.state;
    this.setState({
      formValid: checkboxValid,
    });
  };

  updateCheckbox = ({ name, checked }) => {
    this.setState(
      (prev) => ({
        checkbox: checked,
        selectedCheckBox: checked
          ? prev.selectedCheckBox + 1
          : prev.selectedCheckBox - 1,
      }),
      this.validateCheckbox
    );
  };

  validateCheckbox = () => {
    const { checkbox } = this.state;
    let checkboxValid = true;
    let errorMsg = { ...this.state.errorMsg };
    if (this.state.selectedCheckBox < 1) {
      checkboxValid = false;
      errorMsg.checkbox = "Please select atleast 1 checkbox";
    }
    this.setState({ checkboxValid, errorMsg }, this.validateForm);
  };
  /* validateName = () =>{
    const {name} = this.state;
    let nameValid = true;
    if(this.state.input.name = ""){
      errorMsg.name = "Enter your name"
    }
    this.setState({nameValid,errorMsg},this.validateForm)
  } */
  render() {
    return (
      <div >
        <h3>Let us get to know you better</h3>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <div className="row">
              <div className="form-group text-left col-xs-12 col-md-6 pt2">
                <input
                  required
                  type="text"
                  name="name"
                  value={this.state.input.name}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="First name"
                  id="name"
                />
                <div className="text-danger">{this.state.errors.name}</div>
              </div>
              <div className="form-group text-left col-xs-12 col-md-6 pt2">
                <input
                  required
                  type="text"
                  name="lastName"
                  value={this.state.input.lastname}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Last name"
                  id="lastName"
                />
                <div className="text-danger">{this.state.errors.name}</div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <input
            required
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </div>
          <div className="form-group text-left">
            <PhoneInput
              className="phone"
              required
              type="tel"
              placeholder="Enter phone number"
              convertToNational={true}
              // value={this.state.input.phoneNumber}
            />
          </div>
          <div class="form-group text">
            <h5>Tell us a bit more about your project:</h5>
            <textarea
              name="comment"
              value={this.state.input.comment}
              onChange={this.handleChange}
              placeholder="What’s the biggest challenge your marketing team is now facing? Where would you like to be in 6 months from now with your marketing?"
              class="form-control"
            />
          </div>

          <div className="interest pt3 pb3">
           

            <div className="row checkbox">
            <h5 className="pl3">What areas of marketing are you interested in?:</h5>
              <div className="col-md-6 col-lg-6 col-xs-12 ">
                <input
                  type="checkbox"
                  name="business"
                  onChange={(e) => this.updateCheckbox(e.target)}
                />
                {"Paid Media & Social"}
                <br></br>
                <input
                  type="checkbox"
                  name="health"
                  onChange={(e) => this.updateCheckbox(e.target)}
                />
                {"Content Marketing"}
                <br></br>
                <input
                  type="checkbox"
                  name="society"
                  onChange={(e) => this.updateCheckbox(e.target)}
                />
                {"Growth Strategy"}
                <br></br>
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <input
                  type="checkbox"
                  onChange={(e) => this.updateCheckbox(e.target)}
                />
                {"Data Analytics & Integrations"}
                <br></br>
                <input
                  type="checkbox"
                  name="society"
                  onChange={(e) => this.updateCheckbox(e.target)}
                />
                {"Lead Generation"}
                <br></br>
                <input
                  type="checkbox"
                  name="society"
                  onChange={(e) => this.updateCheckbox(e.target)}
                />
                {"Design & Development"}
                <br></br>
              </div>
            </div>
          </div>

          <div className="amount">
            <h5>What’s your monthly budget look like?</h5>
            <FormGroup>
              <Input required type="select" name="select" id="exampleSelect">
                <option>Select your amount</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </div>
         <Link to="/next">
          <Button
          
            color="primary"
            type="submit"
            value="Start your project"
            className="FButton"
            disabled={!this.state.formValid} 
            disabled={!this.state.input["name"]}
            disabled={!this.state.input["lastName"]}
            disabled={!this.state.input["phoneNumber"]}
            disabled={!this.state.input["email"]}
          >Start</Button>
          </Link>
           
          <br></br>
        </form>
      </div>
    );
  }
}
export default RegisterForm;