import React, { Component } from "react";
import "./App.css";
import Card from "./img/card.png";
import Sim from "./img/sim.png";
import Logo from "./img/logo.png";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      date: ""
    };
  }
  name = e => {
    if (
      /^([^0-9]*)$/.test(e.target.value.toUpperCase()) &&
      e.target.value.length <= 20
    ) {
      this.setState({
        name: e.target.value.toUpperCase()
      });
    } else {
      e.target.value = this.state.name;
      alert("enter your name!");
    }
  };
  number = e => {
    if (!isNaN(e.target.value) && (e.target.value.length) <= 16) {
      this.setState({
        number: e.target.value,
      })
    } else {
      alert('3awed')
      
    }
  };
  date = e => {
    if (this.state.date.length <= 5) {
      if (
        e.target.value.slice(0, 2) <= 12 &&
        e.target.value.slice(3, 5) <= 31
      ) {
        this.setState({
          date: e.target.value
        });
      } else {
        this.setState({ date: "1231" });
      }
    }
  };
  render() {
    return (
      <div className="card">
        <div className="container">
          <div className="Main">
            <img className="bck" src={Card} alt="background" />
            <h1 className="title">CREDIT CARD</h1>
            <img className="sim" src={Sim} alt="sim" />
          </div>
          <div className="card-number">
            <h2 className="number">
              {this.state.number
                .padEnd(16, "*")
                .split("")
                .map((x, i) => {
                  return i === 4 || i === 8 || i === 12 ? " " + x : x;
                })
                .join("")}
            </h2>
            <div className="card-validation">
              <div className="pin-container">
                <h2 className="card-pin" />
                <h2 className="card-holder">
                  {this.state.name.padEnd(20, "-")}
                </h2>
              </div>
              <div className="logo-container">
                <h4 className="card-validity">
                  MONTH/YEAR
                  <br />
                  {this.state.date
                    .padEnd(4, "-")
                    .split("")
                    .map((x, i) => {
                      return i === 2 ? "/" + x : x;
                    })
                    .join("")}
                </h4>
                <img className="logo" src={Logo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="enterValue">
          <h1 className="user">User Information</h1>
          <input
            className="card_name"
            onChange={this.name}
            type="text"
            placeholder="user name"
          />
          <input
            className="card_number"
            onChange={this.number}
            type="text"
            placeholder="card number"
          />
          <input
            className="card_date"
            onChange={this.date}
            type="text"
            placeholder="card date"
          />
        </div>
      </div>
    );
  }
}

export default Main;
