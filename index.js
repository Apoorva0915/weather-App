const inputBox=document.querySelector(".input-box");
const searchBtn=document.getElementById("searchBtn");
const weather_img=document.querySelector(".weather-img");
const weather_body=document.querySelector(".weather-body");
const temperatur=document.querySelector(".temperature");
const description=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");


async function checkWeather(city){
    const api_key="d216b5ca0d6cfc4b2872402547820282";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const weather_data= await fetch(`${url}`).then(response=>response.json());
    
    console.log(weather_data);

    temperatur.innerHTML=`${weather_data.main.temp}<sup>°C</sup>`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`
    const icon=weather_data.weather[0].icon;
    const imgUrl=`http://openweathermap.org/img/wn/${icon}@2x.png`;
    // weather_img.src=weather_data`${imgUrl}`;
    weather_body.innerHTML+=`
    <img src="${imgUrl}">`
}

searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
});
