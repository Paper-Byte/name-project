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
let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

searchBtn.addEventListener('click', async () =>{
    textValue = textBox.value.toLowerCase();
    countryValue = countrySelect.value;
    const genderizeObj = await logGenderizeData(textValue, countryValue)
    const agifyObj = await logAgifyData(textValue, countryValue)
    const nationalizeObj = await logNationalizeData(textValue)

    nameParagraph.textContent = textValue;
    countryParagraph.textContent = regionNames.of(countryValue);
    originParagraph.textContent = regionNames.of(nationalizeObj['country'][0].country_id);
    ageParagraph.textContent = agifyObj.age; 
    nameGenderParagraph.textContent = genderizeObj.gender + ' %' + (genderizeObj.probability * 100);
});