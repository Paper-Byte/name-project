const logGenderizeData = async (name, country) => {
    const genderizeResponse = await fetch(`https://api.genderize.io?name=${name}&country_id=${country}`);
    const genderizeJson = await genderizeResponse.json();
    return genderizeJson;
}


const logAgifyData = async (name, country) => {
    const agifyResponse = await fetch(`https://api.agify.io?name=${name}&country_id=${country}`);
    const agifyJson = await agifyResponse.json();
    return agifyJson;
}


const logNationalizeData = async (name) => {
    const nationalizeResponse = await fetch(`https://api.nationalize.io?name=${name}`);
    const nationalizeJson = await nationalizeResponse.json();
    return nationalizeJson;
}

const logCountriesData = async (country) => {
    const countriesResponse = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const countriesJson = await countriesResponse.json();
    return countriesJson;
}
