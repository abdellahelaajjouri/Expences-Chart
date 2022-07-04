import React, { Component } from "react";
class ExpensesChart extends Component {
  state = {};
  render() {
    return (
      <main className="card__body__content">
        <div className="col1">
          <div className="bar mon"></div>
          <p>mon</p>
        </div>
        <div className="col2">
          <div className="bar tue">
            <div></div>
          </div>
          <p>tue</p>
        </div>
        <div className="col3">
          <div className="bar wed">
            <div></div>
          </div>
          <p>wed</p>
        </div>
        <div className="col4">
          <div className="bar thu">
            <div></div>
          </div>
          <p>thu</p>
        </div>
        <div className="col5">
          <div className="bar fri">
            <div></div>
          </div>
          <p>fri</p>
        </div>
        <div className="col6">
          <div className="bar sat">
            <div></div>
          </div>
          <p>sat</p>
        </div>
        <div className="col7">
          <div className="bar sun">
            <div></div>
          </div>
          <p>sun</p>
        </div>
      </main>
    );
  }
}

export default ExpensesChart;
