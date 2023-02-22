//variáveis e seleção dos elementos
const apiKey = "5df9b5cdde7b22bb7d08ed3ef9a963ef"; 
const apiCountryURL = "https://flagsapi.com/:country_code/:style/:size.png"

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search')

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")

//funções
const getWeatherData = async(city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherUrl);
    const data = await res.json();

    console.log(data)
}


const showWeatherData = (city) =>{
    getWeatherData(city);
}



//eventos

searchBtn.addEventListener("click", (x) => {
    x.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})
