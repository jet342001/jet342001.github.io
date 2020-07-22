const url = 'https://api.openweathermap.org/data/2.5/weather?q=77600,mx&units=imperial&APPID=6c8279d80c5abede95f577b29a3bdcb0';
fetch(url)
.then((response) => response.json())
.then((location) => {
document.getElementById('current').textContent = Math.round(location.main.temp);
document.getElementById('high').textContent = Math.round(location.main.temp_max);
document.getElementById('hum').textContent = location.main.humidity;
document.getElementById('speed').textContent = Math.round(location.wind.speed) + "MPH";
document.getElementById('condition').textContent = location.weather[0].main;
document.getElementById('feelsLike').textContent = Math.round(location.main.feels_like);

});

