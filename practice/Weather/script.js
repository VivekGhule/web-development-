const searchbtn = document.querySelector("#searchBtn");
const cityInput = document.querySelector("#searchInput");

searchbtn.addEventListener("click", getWeather);

async function getWeather(){

    const city = cityInput.value.trim();

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ff8d21fba79c1b2512cb24c7a4bdb3bb`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod !== 200){
            alert("City not found");
            return;
        }

        // ✅ Inject Data Into UI

        document.getElementById("name").innerText = data.name;
        document.getElementById("country").innerText = data.sys.country;

        document.getElementById("temp").innerText =
            Math.round(data.main.temp) + "°C";

        document.getElementById("description").innerText =
            data.weather[0].description;

        document.getElementById("mainWeather").innerText =
            data.weather[0].main;

        document.getElementById("feels_like").innerText =
            Math.round(data.main.feels_like) + "°C";

        document.getElementById("humidity").innerText =
            data.main.humidity + "%";

        document.getElementById("pressure").innerText =
            data.main.pressure + " hPa";

        document.getElementById("visibility").innerText =
            (data.visibility / 1000) + " km";

        document.getElementById("wind_speed").innerText =
            data.wind.speed + " m/s";

        document.getElementById("clouds").innerText =
            data.clouds.all + "%";

        document.getElementById("lat").innerText = data.coord.lat;
        document.getElementById("lon").innerText = data.coord.lon;

        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    }
    catch(error){
        console.log(error);
        alert("Something went wrong");
    }
}
