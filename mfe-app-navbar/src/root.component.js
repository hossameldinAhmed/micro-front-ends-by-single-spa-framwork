import { Link } from "@reach/router";
import React from "react";

export default class Root extends React.Component {
  render() {
    return (
      <>
        <img
          src="https://microfrontends.info/static/MicroFrontends%20Logo%202-819b01c6ce19617c9e4c89ec3425e19e.png"
          className="d-inline-block align-top"
          height="30"
          width="30"
          alt=""
        />
        MFE Demo
        <div class="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="#/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#/employees">
                Employees
              </Link>
            </li>
          </ul>
        </div>
        <em className="text-white">{this.props.name} using React</em>
      </>
    );
  }
}
