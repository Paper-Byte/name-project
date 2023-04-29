const agifyClean = (ageObj) => {
    return ageObj === null ? 'Not Enough Data' : ageObj;
}

const genderizeClean = (genderObj, genderProbability) => {
    return genderObj === null ? 'Not Enough Data' : genderObj + ' ' + (genderProbability * 100) + '%';
}

const regionCodeToCountry = (countryStr) =>{
    const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    const country = regionNames.of(countryStr);
    return country;
}