import React from "react";
import { connect } from "react-redux";
import { addIce, minIce } from "../Actions/IceActions";
import { withRouter } from "react-router-dom";

const IceCream = (props) => {
  return (
    <div>
      <h1>Page ICE CREAM</h1>
      <h3>Total IceCream : {props.iceCream}</h3>
      <button
        onClick={() => {
          props.addIce();
        }}
      >
        Add Ice
      </button>
      <button
        onClick={() => {
          props.minIce();
        }}
      >
        Min Ice
      </button>
      <div>
        <button onClick={() => props.history.push("/")}>Back to Home</button>
      </div>
    </div>
  );
};

const mapStateToProps = (props) => {
  return {
    iceCream: props.CounterIce.iceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIce: () => dispatch(addIce()),
    minIce: () => dispatch(minIce()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(IceCream));
