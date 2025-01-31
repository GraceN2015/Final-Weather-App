
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
        minutes='0${minutes}';
    }
    return '${day} ${hours}:${minutes}'
}
function searchCity(city){
    let apiKey="b2a5adcct04b33178913oc335f405433";
    let apiUrl=
    'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}';
    axios.get(apiUrl.).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
    
    }
    funcion displayForcast() {
        let days=["Tues","Weds","Thurs","Fri","Sat"],
        let forcastHtml="",

        days.forEach(function(day)){
            forcastHtml=
            forcastHtml+
            '    
<div class="weather-forcast-day">
    <div class="weather-forcast-date">$(day)</div>
    <div class="weather-forcast-icon">🌤️ </div>
<div class="weather-forcast-temperatures" >
<strong>15&#176,</strong>
</div>
<div class="weather-forcast-temperature" 8&#176;</div>
</div>
</div>
';
        });
        letforcastElement=document.querySelector("#forcast");
        forcastElement.innerHTML=forcastHtml;
        }
let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handSearchSubmit);

searchCity ("Johannesburg");
displayForcast();

