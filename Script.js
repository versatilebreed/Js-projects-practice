const apiKey = "0517e343fbeadf183120a6607b28fe23";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");

async function getWeather(city) {
    const response = await fetch(apiUrl +  city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else {

    document.querySelector(".error").style.display = "none";
    
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "app-images/images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "app-images/images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "app-images/images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "app-images/images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "app-images/images/mist.png";
    }
    document.querySelector(".weather-Info").style.display = "block";
}   
}
searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
});