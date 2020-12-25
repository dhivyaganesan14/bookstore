import React, { Component } from "react";
import './sign.css';
import Axios from "axios";
export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
          fname: '',
          lname:'',
          email:'',
          pass:'',
          num:'',
          errors: {}
          };
          this.handlesubmit=this.handlesubmit.bind(this);
          this.handleChange=this.handleChange.bind(this);
        }
    handleChange(event) {
            this.setState({value: event.target.value});
          }
    handlesubmit(event){
        event.preventDefault();
        Axios.post('/post',{FirstName:this.state.fname,LastName:this.state.lname,
            Email:this.state.email,Password:this.state.pass,PhoneNumber:this.state.num});
        }
    
      validate(){
          let errors = {};
          let isValid = true;
          if (!"fname") {
            isValid = false;
            errors["name"] = "Please enter your first name.";
        }
        if (!"lname") {
            isValid = false;
            errors["name"] = "Please enter your last name.";
        }
         if (!"email") {
             isValid = false;
             errors["email"] = "Please enter your email Address.";
  
        }
        
        if (typeof "email"!== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
          if (!pattern.test("email")) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
        }
        if (!"password") {
            isValid = false;
            errors["password"] = "Please enter your Password.";
        }
       if (!"num") {
        isValid = false;
        errors["num"] = "Please enter your Phone Number Address.";
        }
        if (typeof "num" !== "undefined") {
            var pattern1 = new RegExp(/^[0-9\b]+$/);
            if (!pattern1.test("num")) {
                isValid = false;
                errors["num"] = "Please enter only number.";
            }else if("num".length !== 10){
                isValid = false;
                errors["num"] = "Please enter valid phone number.";
            }
        }
        this.setState({
            errors: errors});
            return isValid;
  
    }

    render() {
        
        return (
            <form onSubmit={this.handlesubmit}> 
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="fname"
                      onChange={this.handleChange} />
                     <div className="text-danger">{this.state.errors.fname}</div>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lname"
                      onChange={this.handleChange} />
                     <div className="text-danger">{this.state.errors.lname}</div>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                    name="email"  onChange={this.handleChange} />
                    <div className="text-danger">{this.state.errors.email}</div>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                     name="pass" onChange={this.handleChange} />
                     <div className="text-danger">{this.state.errors.pass}</div>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter phonenumber" 
                     name="num"  onChange={this.handleChange}/>
                     <div className="text-danger">{this.state.errors.num}</div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.handlesubmit}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./login">log in?</a>
                </p>
            </form>
        );
    }
}

