const APIKey = "bd981e7e6881f3961e89d309552d15b6";
const currentDate = moment().format("(L)");

// get current weather data
function currentWeather(city) {
  let queryURL = `https://api.openweathermap.org/data/3.0/onecall?weather?q=${city}&appid=${APIKey}`;
  fetch(queryURL)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      $("#city").innerHTML = response.data.name + " " + currentDate;
      let weatherIcon = response.data.weather[0].icon;
      $("#weather-icon").setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
      );
      let currentTemp = response.data.main.temp;
      let celsiusValue = currentTemp - 273.15;
      $("#temp").innerHTML =
        "Temperature:" + " " + Math.floor(celsiusValue) + "°C";
      $("#wind").innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
      $("#humid").innerHTML = "Humidity: " + response.data.main.humidity + "%";

      // getting UV Index
      let latitude = data.coord.lat;
      let longitude = data.coord.lon;
      console.log(data.coord);
      let uvURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${APIkey}`;
      fetch(uvURL)
      .then((response) => {
        let UVIndex = document.createElement("button");
        UVIndex.classList.add("btn");
        UVIndex.innerHTML = response.current.uv;

        if (response.current.uv < 3) {
          UVIndex.classList.add("btn-success");
        } else if (response.current.uv < 7) {
          UVIndex.classList.add("btn-warning");
        } else {
          UVIndex.classList.add("btn-danger");
        }

        $("#uv").innerHTML = " ";
        $("#uv").appendChild(UVIndex);
      });
    });
}

// event listener
$("#search-btn").on("click", (event) => {
  event.preventDefault();
  currentWeather(city);
});
