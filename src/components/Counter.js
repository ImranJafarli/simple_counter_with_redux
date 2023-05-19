import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button
          onClick={() => {
            props.dispatch({ type: "INCREMENT" });
          }}
        >
          +
        </button>
        <span>{props.count}</span>
        <button
          onClick={() => {
            props.dispatch({ type: "DECREMENT" });
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    count: state.countData.count,
  };
}

export default connect(mapStateToProps)(Counter);
