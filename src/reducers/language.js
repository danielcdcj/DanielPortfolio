import defaultLanguage, {list} from '../defaults/language';

var initialState = {
  currentLanguage:defaultLanguage,
  availableLanguages:list
};

const language = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return Object.assign({}, state, {currentLanguage:action.language});
    case 'SET_SITE_LANGUAGES':
      return Object.assign({}, state, {availableLanguages:action.languages});
    default:
      return state || initialState;
  }
}
export default language;
