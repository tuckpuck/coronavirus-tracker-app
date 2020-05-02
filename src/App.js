import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

export default class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <h1>App</h1>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
