const APIKey = "bd981e7e6881f3961e89d309552d15b6";
const currentDate = moment().format("(L)");
const currentCity = "";
const previousCity = "";

// get current weather data
function currentWeather(city) {
    let queryURL = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={APIkey}`;
    fetch(queryURL)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        $('#city').innerHTML = response.data.name + " " + currentDate;
        let weatherIcon = response.data.weather[0].icon;
        $('#weather-icon').setAttribute("src","https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png");
        let currentTemp = data.main.temp;
        let celsiusValue = currentTemp - 273.15;
        $('#temp').innerHTML = "Temperature:" + " " + Math.floor(celsiusValue) + "°C";
        $('#wind').innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
        $('#humid').innerHTML = "Humidity: " + response.data.main.humidity + "%";
    })
};

// event listener
$('#search-btn').on("click", (event) => {
    event.preventDefault();
    currentWeather(city);
});
