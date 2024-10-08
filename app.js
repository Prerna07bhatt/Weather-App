const apiKey = "04dc8d02531a3170359b88e919c4fe1f";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
 
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



 async function checkWeather(city) {
 const response =   await fetch(apiUrl+ city +`&appid=${apiKey}`);
  if (response.status == 404){
    document.querySelector(".error").style.display ="block";
    document.querySelector(".weather").style.display ="none";
  }

  else{
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.city.name;
    document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed+"Km/h";

    if(data.list[0].weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
    } 
    else if(data.list[0].weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.list[0].weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.list[0].weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.list[0].weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display ="none";

  }
 
        
}

 searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
 })

