export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addIce = () => {
  return {
    type: INCREMENT,
  };
};

export const minIce = () => {
  return {
    type: DECREMENT,
  };
};
