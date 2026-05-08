import MenuShimmer from "./MenuShimmer";
import ShimmerCard from "./ShimmerCard";
import React from "react";

class ChatBot extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {},
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  componentDidUpdate() {
    console.log("compoenent re-rendered");
  }

  componentWillUnmount() {
    console.log("component unmounted from the page");
  }

  fetchUserData = async () => {
    const response = await fetch("https://api.github.com/users/rahoolkar");
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
  };

  render() {
    if (Object.keys(this.state.userInfo).length == 0) {
      return <MenuShimmer></MenuShimmer>;
    }

    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div>
        <img src={avatar_url} alt="user profile picture" />
        <h1>Username : {name} </h1>
        <h2>Location : {location}</h2>
        <h3>About : {bio}</h3>
      </div>
    );
  }
}

export default ChatBot;
