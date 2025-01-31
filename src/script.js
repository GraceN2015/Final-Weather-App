
function refreshWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let descriptionElement=document.querySelector("#desciption");
   let  humidityElement=document.querySelector("#humidity");
    let cityElement=document.querySelector("#city");
    let windSpeedElement=document.querySelector("#wind-speed");
    let timeElement=document.querySelector("#time");
    let date=new Date  (response.data.time * 1000);
    let iconElement= document.querySelector("#icon");


cityElement.innerHTML=response.data.city
timeElement.innerHTML=formatDate(date);
descriptionElement.innerHTML=response.data.condition.description;
humidityElement.innerHTML="${response.data.tempeerature.humidity}%";
windSpeedElement.innerHTML="${response.data.wind.speed}km/h";
temperatureElement.innerHTML=Math.round(temperature);
iconElement.innerHTML=<img src="${response.data.condition.icon-url}"class="weather-app-icon"/
}
function formatDate(date){
    let minute=date.getMinute();
    let hours=date.getHours();
    let days=[
        "Sunsay";
        "Monday";
        "Tuesday";
        "wednesday";
        "Thursday";
        "Friday";
        "Saturday";
    ];
    let day= days [date.getDay()];
    if (minute<10){
        minutes="0${minutes}";
    }
}
function searchCity(city){
    let apiKey="b2a5adcct04b33178913oc335433";
    let apiUrl=
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}";
    axios.get(apiUrl.).then(refreshWeather);
    console.log(apiUrl);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput=document.querySelector("search-form-input");
    let cityElement=document.querySelector("city");
    cityElement.innerHTML=searchInput.value;
    searchCity(searchInput.value);
    
    }

}
let searchFormElement=document.querySelector("search-form");
searchFormElement.addEventListerner("submit",handSearchSubmit);
searchCity ("Johannesburg");