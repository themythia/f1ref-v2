import countries from 'i18n-iso-countries';
import nationalities from 'i18n-nationality';
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
nationalities.registerLocale(require('i18n-nationality/langs/en.json'));

const countryCodes = (country, type = 'country') => {
  if (type === 'country') {
    if (country === 'UAE') return 'AE';
    else return countries.getAlpha2Code(country, 'en');
  } else if (type === 'nationality') {
    if (country === 'Monegasque') return 'MC';
    return nationalities.getAlpha2Code(country, 'en');
  }
};
export default countryCodes;
