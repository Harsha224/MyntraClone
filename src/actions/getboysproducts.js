import { boysData } from "../data";

function allboysdata(payload) {
  return {
    type: "RECEIVED_BOYS_DATA",
    payload,
  };
}

export const getallboysdata = () => {
  return (dispatch) => {
    dispatch(allboysdata(boysData));
  };
};
