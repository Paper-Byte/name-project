async function logGenderizeData(name, country){
    const genderizeResponse = await fetch(`https://api.genderize.io?name=${name}&country_id=${country}`);
    const genderizeJson = await genderizeResponse.json();
    return genderizeJson;
}


async function logAgifyData(name, country){
    const agifyResponse = await fetch(`https://api.agify.io?name=${name}&country_id=${country}`);
    const agifyJson = await agifyResponse.json();
    return agifyJson;
}


async function logNationalizeData(name){
    const nationalizeResponse = await fetch(`https://api.nationalize.io?name=${name}`);
    const nationalizeJson = await nationalizeResponse.json();
    return nationalizeJson;
}
