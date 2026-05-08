import Assistant from "./Assistant";
import ChatBot from "./ChatBot";
import React from "react";

class Help extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>How may I help you?</h1>
        <Assistant name="Udayan Kar Blinkit Vala" age={19}></Assistant>
        <ChatBot></ChatBot>
      </div>
    );
  }
}

export default Help;
