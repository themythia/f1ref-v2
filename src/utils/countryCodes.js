import countries from 'i18n-iso-countries';
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

const countryCodes = (country) => {
  if (country === 'UAE') return 'AE';
  else return countries.getAlpha2Code(country, 'en');
};
export default countryCodes;
