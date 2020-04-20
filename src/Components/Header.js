import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>This Is Header</h2>
      <h3>My Cakes : {props.cakes}</h3>
      <h3>My IceCream : {props.iceCream}</h3>
    </div>
  );
};

const mapStateToProps = (props) => {
  return {
    cakes: props.CounterCakes.cakes,
    iceCream: props.CounterIce.iceCream,
  };
};

export default connect(mapStateToProps, null)(Header);
