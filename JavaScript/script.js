const textBox = document.getElementById('nameSearchBox');
const searchBtn = document.getElementById('nameSearchBtn');
const nameSpan = document.getElementById('nameValue');
const countrySpan = document.getElementById('nameCountry');
const ageSpan = document.getElementById('nameAge');
const originSpan = document.getElementById('nameOrigin');
const nameGenderSpan = document.getElementById('nameGenderOdds');
const input = document.querySelector('input[name=countryText]');

let textValue = '';
let countryValue = '';
input.addEventListener('input', (e) => {
  countryValue = e.target.value;
});

searchBtn.addEventListener('click', async () => {
  textValue = textBox.value.toLowerCase();
  const countryCodeObj = await logCountriesData(countryValue);
  const nationalizeObj = await logNationalizeData(textValue);
  const agifyObj = await logAgifyData(
    textValue,
    countryCodeObj[0].cca2
  );
  const genderizeObj = await logGenderizeData(
    textValue,
    countryCodeObj[0].cca2
  );

  nameSpan.textContent = nameFormatting(textValue);
  countrySpan.textContent = countryValue;
  originSpan.textContent = regionCodeToCountry(
    nationalizeObj['country'][0].country_id
  );
  ageSpan.textContent = agifyClean(agifyObj.age);
  nameGenderSpan.textContent = genderizeClean(
    genderizeObj.gender,
    genderizeObj.probability
  );
  input.value = '';
  textBox.value = '';
});
