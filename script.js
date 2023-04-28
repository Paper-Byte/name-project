const textBox = document.getElementById('nameSearchBox');
const searchBtn = document.getElementById('nameSearchBtn');
const countrySelect = document.getElementById('countrySelect');
const nameParagraph = document.getElementById('nameValue');
const countryParagraph = document.getElementById('nameCountry');
const originParagraph = document.getElementById('nameOrigin');
const nameGenderParagraph = document.getElementById('nameGenderOdds');

let textValue = '';
let countryValue = '';
let nameValue = '';
let nameOrigin = '';
let nameGender = '';
let nameGenderProbablity = '';

searchBtn.addEventListener('click', () =>{
    textValue = textBox.value.toLowerCase();
    countryValue = countrySelect.value;
    async function logGenderizeData(){
        const genderizeResponse = await fetch(`https://api.genderize.io?name=${textValue}&country_id=${countryValue}`);
        const genderizeObj = await genderizeResponse.json();
    }
    async function logAgifyData(){
        const agifyResponse = await fetch(`https://api.agify.io?name=${textValue}&country_id=${countryValue}`);
        const agifyObj = await agifyResponse.json();
    }
    async function logNationalizeData(){
        const nationalizeResponse = await fetch(`https://api.nationalize.io?name=${textValue}`);
        const nationalizeObj = await nationalizeResponse.json();
    }
});