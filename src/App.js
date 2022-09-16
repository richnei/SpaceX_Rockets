/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, Fragment } from "react";
import "./App.css";
import { Card } from "./components/Card"
import { Modal } from "./components/Modal"

class App extends Component {
  constructor () {
    super();

    this.state = {
     rockets: []
    }
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then(rockets => this.setState({rockets: rockets}))
  }
  render () {
    return (
      <div className="container">
        <h1>SpaceX Rockets</h1>
        <div className="row">
          {this.state.rockets.map((rocket) => (
            <Fragment>
              <Card rocket={rocket} />
              <Modal rocket={rocket} />
            </Fragment>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
