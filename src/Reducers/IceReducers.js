import { QUANTITY_ADD, QUANTITY_MIN } from "../Actions/IceActions";

const initState = {
  iceCream: 0,
};

const CounterIce = (state = initState, action) => {
  switch (action.type) {
    case QUANTITY_ADD:
      return {
        ...state,
        iceCream: state.iceCream + 1,
      };
    case QUANTITY_MIN:
      return {
        ...state,
        iceCream: state.iceCream - 1,
      };
    default:
      return state;
  }
};

export default CounterIce;
