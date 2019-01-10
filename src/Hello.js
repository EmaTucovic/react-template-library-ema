import React from "react";
import styles from "./styles.css";

type MyType = {
  name: string
};

export default class Hello extends React.Component {
  componentDidMount() {
    console.log("styles",styles );
  }
  state = { myState: 123 };
  render() {
    var my: MyType = { name: "Ema" };
    const [a, ...b] = [1, 2, 3, 4, 5, 6];
    const { o1, ...o2 } = { o1: 123, a: 3, b: 4 };
    return (
      <div className={styles.Red}>
        Hello there... + {a} + {b.length} {my.name} {this.state.myState} {o1}
      </div>
    );
  }
}
