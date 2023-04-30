const textBox = document.getElementById('nameSearchBox');
const searchBtn = document.getElementById('nameSearchBtn');
const countrySelect = document.getElementById('countrySelect');
const nameParagraph = document.getElementById('nameValue');
const countryParagraph = document.getElementById('nameCountry');
const ageParagraph = document.getElementById('nameAge');
const originParagraph = document.getElementById('nameOrigin');
const nameGenderParagraph = document.getElementById('nameGenderOdds');

let textValue = '';
let countryValue = '';

searchBtn.addEventListener('click', async () =>{
    textValue = textBox.value.toLowerCase();
    countryValue = countrySelect.value;
    const genderizeObj = await logGenderizeData(textValue, countryValue)
    const nationalizeObj = await logNationalizeData(textValue)
    const agifyObj = await logAgifyData(textValue, countryValue)

    nameParagraph.textContent = nameFormatting(textValue);
    countryParagraph.textContent = regionCodeToCountry(countryValue);
    originParagraph.textContent = regionCodeToCountry((nationalizeObj['country'][0].country_id));
    ageParagraph.textContent = agifyClean(agifyObj.age);
    nameGenderParagraph.textContent = genderizeClean(genderizeObj.gender, genderizeObj.probability);
});