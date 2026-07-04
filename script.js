const APIkey = "39b3cd3001112cad5f068257f6d95976";

const inputBar = document.querySelector(".input-bar");
const searchIcon = document.querySelector(".ri-search-2-line");

const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidValueElement = document.querySelector(".humid-val");
const speedValueElement = document.querySelector(".speedvalue");

async function checkWeather(cityName) {

    if(cityName==""){
        alert("Please enter a city name.");
        return;
    }

    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`;

    try{

        const response = await fetch(apiurl);
        const data = await response.json();

        if(data.cod != 200){
            alert("City not found!");
            return;
        }

        cityElement.innerText = data.name;
        tempElement.innerText = Math.round(data.main.temp) + "°C";
        humidValueElement.innerText = data.main.humidity + "%";
        speedValueElement.innerText = data.wind.speed + " km/h";

    }
    catch(error){
        alert("Something went wrong!");
    }

}

searchIcon.addEventListener("click", function(){

    checkWeather(inputBar.value.trim());

    inputBar.value="";

});

inputBar.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        checkWeather(inputBar.value.trim());

        inputBar.value="";

    }

});

checkWeather("Surat");