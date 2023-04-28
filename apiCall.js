async function logGenderizeData(){
    const genderizeResponse = await fetch(`https://api.genderize.io?name=${textValue}&country_id=${countryValue}`);
    const genderizeJson = await genderizeResponse.json();
    return genderizeJson;
}

async function logAgifyData(){
    const agifyResponse = await fetch(`https://api.agify.io?name=${textValue}&country_id=${countryValue}`);
    const agifyJson = await agifyResponse.json();
    return agifyJson;
}

async function logNationalizeData(){
    const nationalizeResponse = await fetch(`https://api.nationalize.io?name=${textValue}`);
    const nationalizeJson = await nationalizeResponse.json();
    return nationalizeJson;
}