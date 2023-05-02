const agifyClean = (ageObj) => {
  return ageObj === null ? 'Not Enough Data' : ageObj;
};

const genderizeClean = (genderObj, genderProbability) => {
  return genderObj === null
    ? 'Not Enough Data'
    : nameFormatting(genderObj) + ' ' + genderProbability * 100 + '%';
};

const regionCodeToCountry = (countryStr) => {
  const regionNames = new Intl.DisplayNames(['en'], {
    type: 'region',
  });
  const country = regionNames.of(countryStr);
  return country;
};

const nameFormatting = (nameStr) => {
  return nameStr.charAt(0).toUpperCase() + nameStr.slice(1);
};
