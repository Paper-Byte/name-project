const textBox = document.getElementById('nameSearchBox');
const searchBtn = document.getElementById('nameSearchBtn');
const countrySelect = document.getElementById('countryList');
const nameParagraph = document.getElementById('nameValue');
const countryParagraph = document.getElementById('nameCountry');
const ageParagraph = document.getElementById('nameAge');
const originParagraph = document.getElementById('nameOrigin');
const nameGenderParagraph = document.getElementById('nameGenderOdds');

let textValue = '';
let countryValue = '';
// countrySelect.addEventListener('change', function() {
//   countryValue = countrySelect.value;
// });

searchBtn.addEventListener('click', async () =>{
    textValue = textBox.value.toLowerCase();
    countryValue = document.getElementById('countryList').textContent;
    console.log(countryValue);

    // nameParagraph.textContent = nameFormatting(textValue);
    // countryParagraph.textContent = countryValue;
    // originParagraph.textContent = regionCodeToCountry((nationalizeObj['country'][0].country_id));
    // ageParagraph.textContent = agifyClean(agifyObj.age);
    // nameGenderParagraph.textContent = genderizeClean(genderizeObj.gender, genderizeObj.probability);
});