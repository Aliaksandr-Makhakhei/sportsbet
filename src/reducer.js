const initialState = {
  game: "",
  bet: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "BET") {
    return { ...state, game: action.payload };
  }

  if (action.type === "RATE") {
    return { ...state, bet: action.payload };
  }

  return state;
};

export default reducer;