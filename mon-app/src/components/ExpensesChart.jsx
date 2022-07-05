import React, { Component } from "react";
class ExpensesChart extends Component {
  state = {
    data: [
      {
        day: "mon",
        amount: 17.45,
      },
      {
        day: "tue",
        amount: 34.91,
      },
      {
        day: "wed",
        amount: 52.36,
      },
      {
        day: "thu",
        amount: 31.07,
      },
      {
        day: "fri",
        amount: 23.39,
      },
      {
        day: "sat",
        amount: 43.28,
      },
      {
        day: "sun",
        amount: 25.48,
      },
    ],
  };
  render() {
    return (
      <main className="card__body__content">
        <div className="col1">
          <div className="bar"></div>
          <p>mon</p>
        </div>
        <div className="col2">
          <div className="bar">
            <div></div>
          </div>
          <p>tue</p>
        </div>
        <div className="col3">
          <div className="barO">
            <div></div>
          </div>
          <p>wed</p>
        </div>
        <div className="col4">
          <div className="bar">
            <div></div>
          </div>
          <p>thu</p>
        </div>
        <div className="col5">
          <div className="bar">
            <div></div>
          </div>
          <p>fri</p>
        </div>
        <div className="col6">
          <div className="bar">
            <div></div>
          </div>
          <p>sat</p>
        </div>
        <div className="col7">
          <div className="bar">
            <div></div>
          </div>
          <p>sun</p>
        </div>
      </main>
    );
  }
}

export default ExpensesChart;
