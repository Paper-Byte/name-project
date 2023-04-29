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

// const regionCodeToCountry = (string) =>{
//     const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
//     const country = regionNames.of(string);
//     return country;
// }

searchBtn.addEventListener('click', async () =>{
    textValue = textBox.value.toLowerCase();
    countryValue = countrySelect.value;
    const genderizeObj = await logGenderizeData(textValue, countryValue)
    const nationalizeObj = await logNationalizeData(textValue)
    const agifyObj = await logAgifyData(textValue, countryValue)

    // nameParagraph.textContent = textValue;
    // countryParagraph.textContent = regionCodeToCountry(countryValue);
    // originParagraph.textContent = regionCodeToCountry((nationalizeObj['country'][0].country_id));

    // if(agifyObj.age === null){
    //     ageParagraph.textContent = 'Not Enough Data';
    // }else{
    //     ageParagraph.textContent = agifyObj.age;
    // }

    // if(genderizeObj.gender === null){
    //     nameGenderParagraph.textContent = 'Not Enough Data'
    // }else{
    //     nameGenderParagraph.textContent = genderizeObj.gender + ' %' + (genderizeObj.probability * 100);
    // }
    countryParagraph.textContent = regionCodeToCountry(countryValue);
    originParagraph.textContent = regionCodeToCountry((nationalizeObj['country'][0].country_id));
    ageParagraph.textContent = agifyClean(agifyObj.age);
    nameGenderParagraph.textContent = genderizeClean(genderizeObj.gender, genderizeObj.probability);
});