export const QUANTITY_ADD = "QUANTITY_ADD";
export const QUANTITY_MIN = "QUANTITY_MIN";

export const addIce = () => {
  return {
    type: QUANTITY_ADD,
  };
};

export const minIce = () => {
  return {
    type: QUANTITY_MIN,
  };
};
