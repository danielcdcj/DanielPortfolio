export const setLanguage = (newLanguage) => ({
  type: 'SET_LANGUAGE',
  language: newLanguage
});
export const setSiteLanguages = (languages) => ({
  type: 'SET_SITE_LANGUAGES',
  languages
});

export const setSiteString = (siteStrings) => ({
  type: 'SET_SITESTRING',
  siteStrings
});
