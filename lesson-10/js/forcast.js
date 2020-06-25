const url = 'https://api.openweathermap.org/data/2.5/weather?q=Preston,us&units=imperial&APPID=6c8279d80c5abede95f577b29a3bdcb0'; 
fetch(apiURL)
.then((response) => response.json())
.then((forecast) => {
  console.log(forecast);

document.getElementById('day1').textContent = Math.round(forecast.list[0].main.temp_max);
document.getElementById('day2').textContent = Math.round(forecast.list[14].main.temp_max);
document.getElementById('day3').textContent = Math.round(forecast.list[22].main.temp_max);
document.getElementById('day4').textContent = Math.round(forecast.list[30].main.temp_max);
document.getElementById('day5').textContent = Math.round(forecast.list[32].main.temp_max);

//document.getElementById('').textContent = Math.round(forecast.list[36].main.temp_min);

}