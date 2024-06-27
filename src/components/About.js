import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructors");
  }
  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    console.log("parent Render");

    return (
      <>
        <h4>This is about page</h4>
        {/* <User name={"Nigar"} location={"Asansol"} /> */}
        <UserClass name={"Fatma"} />
      </>
    );
  }
}
// const About = () => {
//   return (
//     <>
//       <h4>This is about page</h4>
//       {/* <User name={"Nigar"} location={"Asansol"} /> */}
//       <UserClass name={"Fatma"} />
//     </>
//   );
// };
export default About;
