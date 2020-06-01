function updateboysData(state, action) {
  const { payload } = action;
  return {
    ...state,
    boysallproducts: payload.data,
    count: payload.count,
  };
}

export function boysproducts(state = {}, action) {
  switch (action.type) {
    case "RECEIVED_BOYS_DATA":
      return updateboysData(state, action);
    default:
      return state;
  }
}
