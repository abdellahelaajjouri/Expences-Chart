import React, { Component } from "react";
import logo from "../imgs/logo.svg";
class Header extends Component {
  state = {};
  render() {
    return (
      <header
        className="card__header 
    common"
      >
        <div className="header__content">
          <p className="header__content__subtitle">My balance</p>
          <h3 className="header__content__title">$921.48</h3>
        </div>
        <div className="header__logo">
          <img className="logo" src={logo} alt="Expenses Chart Logo" />
        </div>
      </header>
    );
  }
}

export default Header;
