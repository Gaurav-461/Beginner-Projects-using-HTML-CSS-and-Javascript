const apiKey = "bb16ae82aa0200e79f81da99e34f74b4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".empty").style.display = "none";
    
  }else if(response.status == 400){
    document.querySelector(".empty").style.display = "block";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "none";
  }
  else {
    var data = await response.json();
    console.log(data);

    const cityName = document.querySelector(".city");
    cityName.innerHTML = data.name;

    const temp = document.querySelector(".temp");
    temp.innerHTML = Math.round(data.main.temp) + "°c";

    const humidity = document.querySelector(".humidity");
    humidity.innerHTML = data.main.humidity + "%";

    const wind = document.querySelector(".wind");
    wind.innerHTML = Math.floor(data.wind.speed) + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
      let backgroundImage=document.querySelector("body");
      backgroundImage.style.backgroundImage="images/back-sunny.jpg";

    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".empty").style.display = "none";

  }
  
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
