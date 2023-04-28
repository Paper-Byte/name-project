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

searchBtn.addEventListener('click', () =>{
    textValue = textBox.value.toLowerCase();
    countryValue = countrySelect.value;

    const genderizeObj = JSON.parse(logGenderizeData(textValue, countryValue));
    const agifyObj = JSON.parse(logAgifyData(textValue, countryValue));
    const nationalizeObj = JSON.parse(logNationalizeData(textValue));

    nameParagraph.textContent = textValue;
    countryParagraph.textContent = regionNames.of(countryValue);
    originParagraph.textContent = regionNames(nationalizeObj[0].country_id);
    ageParagraph.textContent = agifyObj.age;
    originParagraph.textContent = nationalizeObj.
});