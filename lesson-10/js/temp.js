const url = 'https://api.openweathermap.org/data/2.5/weather?q=Preston,us&units=imperial&APPID=6c8279d80c5abede95f577b29a3bdcb0';
fetch(url)
.then((response) => response.json())
.then((preston) => {
  console.log(preston);
  
document.getElementById('current').textContent = Math.round(preston.main.temp);
document.getElementById('high').textContent = Math.round(preston.main.temp_max);
document.getElementById('hum').textContent = preston.main.humidity;
document.getElementById('speed').textContent = Math.round(preston.wind.speed) + "MPH";
//document.getElementById('conditions').textContent = preston.weather[0].main;
//document.getElementById('feelsLike').textContent = Math.round(preston.main.feels_like);

});