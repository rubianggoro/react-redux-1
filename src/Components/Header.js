import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <div>
      <h2>This Is Header</h2>
      <h3>My Cakes : {props.cakes}</h3>
      <h3>My IceCream :</h3>
    </div>
  );
};

const mapStateToProps = ({ cakes }) => {
  return {
    cakes: cakes,
  };
};

export default connect(mapStateToProps, null)(Header);
