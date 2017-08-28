var initialState = "English";

const language = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_LANGUAGE':
      return action.language;
    default:
      return state || initialState;
  }
}
export default language;
