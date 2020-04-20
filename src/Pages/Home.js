import React from "react";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  //   console.log("props", props);
  return (
    <div>
      <h1>Page HOME</h1>
      <button onClick={() => props.history.push("/cakes")}>Page Cakes</button>
      <button onClick={() => props.history.push("/icecream")}>
        Page IceCream
      </button>
    </div>
  );
};

export default withRouter(Home);
