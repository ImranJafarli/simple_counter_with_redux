const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      if (state.count === 0) {
        alert("olmaaaaaaaaaaaaaaz");
        return state;
      }
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
