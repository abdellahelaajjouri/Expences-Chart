import React, { Component } from "react";
class Body extends Component {
  state = {};
  render() {
    return (
      <article className="card__body common">
        <header className="card__body__header">
          <h2>Spending - Last 7 days </h2>
        </header>

        <main className="card__body__content">Expenses Chart</main>

        <hr />

        <footer className="card__body__footer">
          <div className="footer__content">
            <p className="footer__content__subtitle">Total this month</p>
            <h2 className="footer__content__title">$478.33</h2>
          </div>
          <div className="footer__aside">
            <h2 className="footer__aside__title">+2.4%</h2>
            <p className="footer__aside__subtitle">from last month</p>
          </div>
        </footer>
      </article>
    );
  }
}

export default Body;
