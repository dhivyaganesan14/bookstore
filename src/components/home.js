import React, { Component } from "react";
import './home.css';

export default class Home extends Component {
    render() {
        return (
          <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
            <p ClassName="navbar-brand">SEARCH</p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto flex-column vertical-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">DASHBOARD</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">FAVORUITES</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CART</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ORDERED</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">TESTIMONY</a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">LOGOUT</a>
      </li>
    </ul>
    </div>

    
</nav>


/*const getEmployees = () => {
  Axios.get("http://localhost:3001/employees").then((response) => {
    setEmployeeList(response.data);
  });
};*/
        );
    }
}
