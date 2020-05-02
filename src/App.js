import React from "react";

import { Cards, Chart, CountryPicker } from "./components";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
