import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    // this.state = {
    //   count: 0,
    // };
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default Location",
      },
    };
    console.log("child Constructor");
  }
  async componentDidMount() {
    // console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/nigarfatma");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      // console.log("check clearup");
    }, 1000);
    // console.log("JSON", json);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("component will unmount");
  }
  render() {
    // const { name } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    // const {count} this.state
    // render return some piece of jsx
    // console.log("child render");
    return (
      <div className="user-card">
        {/* <h1>count:{this.state.count}</h1>
        <button
          onClick={() => {
            // never update state variable directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click
        </button> */}
        <img src={avatar_url} alt="" />
        <h2>Name:{name}</h2>
        {/* <h2>Name:{name}</h2> */}
        <h3>Location:{location}</h3>
        <h4>Contact:@nigar76@@z</h4>
      </div>
    );
  }
}

export default UserClass;
