import React, { Component } from "react";
import { FaHome } from "react-icons/fa";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="navbar-nav">
               <FaHome/>
              </div>
            </div>
            <div className="col-2">
              <small class="text-primary ">
                Learn react js is good for development
              </small>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
