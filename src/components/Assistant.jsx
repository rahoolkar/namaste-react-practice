import React from "react";

class Assistant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { name, age } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h4>Name : {name}</h4>
        <h6>Age : {age}</h6>
        <p>About him : Not so polite and very weakand kaamchor</p>
        <p>count is {count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Assistant;
