import React from "react";
import { connect } from "react-redux";
import { addCakes, minCakes } from "../Actions/CakesActions";
import { withRouter } from "react-router-dom";

const Cakes = (props) => {
  // console.log("props", props);
  return (
    <div>
      <h1>Page CAKES</h1>
      <h3>total cakes : {props.cakes}</h3>
      <button
        onClick={() => {
          props.addCakes();
        }}
      >
        Add Cakes
      </button>
      <button
        onClick={() => {
          props.minCakes();
        }}
      >
        MinCakes
      </button>
      <div>
        <button onClick={() => props.history.push("/")}>Back to Home</button>
      </div>
    </div>
  );
};

const mapStateToProps = (props) => {
  // console.log("props", props);
  return {
    cakes: props.CounterCakes.cakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCakes: () => dispatch(addCakes()),
    minCakes: () => dispatch(minCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cakes));
