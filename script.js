const apikey =  "Api key"       //"66eb9af987324dfdabc171332261507";
const apiurl = "https://api.weatherapi.com/v1/current.json";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

  const response = await fetch(
    `${apiurl}?key=${apikey}&q=${city}&aqi=no`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();



    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/hr";

    if (data.current.condition.text == "Sunny") {
      weatherIcon.src = "images/clear.png";
    }
    else if (data.current.condition.text == "Cloudy") {
      weatherIcon.src = "images/clouds.png";
    }
    else if (data.current.condition.text == "Rain") {
      weatherIcon.src = "images/rain.png";
    }
    else if (data.current.condition.text == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    else if (data.current.condition.text == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }


}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});