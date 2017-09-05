import strings from '../defaults/strings';

var initialState = strings;

const siteString = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SITESTRING':
      return action.siteStrings;
    default:
      return state || initialState;
  }
}
export default siteString;
