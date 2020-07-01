updateForecast();


function updateForecast() {
    const fUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Preston,us&units=imperial&APPID=6c8279d80c5abede95f577b29a3bdcb0';
    var weekcon = new Array(5);
    fetch(fUrl)
        .then((response) => response.json())
        .then((forecast) => {
            console.log(forecast);
            document.getElementById('day1').textContent = Math.round(forecast.list[0].main.temp_max);
            document.getElementById('day2').textContent = Math.round(forecast.list[14].main.temp_max);
            document.getElementById('day3').textContent = Math.round(forecast.list[22].main.temp_max);
            document.getElementById('day4').textContent = Math.round(forecast.list[30].main.temp_max);
            document.getElementById('day5').textContent = Math.round(forecast.list[32].main.temp_max);
            weekcon[0] = parseInt(forecast.list[0].weather[0].id);
            weekcon[1] = forecast.list[14].weather[0].id;
            weekcon[2] = forecast.list[22].weather[0].id;
            weekcon[3] = forecast.list[30].weather[0].id;
            weekcon[4] = parseInt(forecast.list[32].weather[0].id);
            //document.getElementById('').textContent = Math.round(forecast.list[36].main.temp_min);
            
            //Handles the images loading for weather icons. 
            for (var c = 0; c < 5; c++){
                var i = weekcon[c];
                console.log(i);
                if(i > 200 && i < 300 ){
                    weekcon[c] = "images/weathericons/ThunderStorm.png";
                }
                else if(i > 300 && i < 600){
                    weekcon[c] = "images/weathericons/Raining.png";
                }
                else if(i > 600 && i < 700 ){
                    weekcon[c] = "images/weathericons/Snowing.png";
                }
                else if(i >700 && i < 801){
                    weekcon[c] = "images/weathericons/Clear.png";
                }
                else{
                    weekcon[c] = "images/weathericons/Cloudy.png";
                }
            }
            console.log(weekcon);
            //setting the image icons
            document.getElementById('wIcon1').setAttribute('src', weekcon[0]);
            document.getElementById('wIcon2').setAttribute('src', weekcon[1]);
            document.getElementById('wIcon3').setAttribute('src', weekcon[2]);
            document.getElementById('wIcon4').setAttribute('src', weekcon[3]);
            document.getElementById('wIcon5').setAttribute('src', weekcon[4]);
        })

    console.log(weekcon);
    //writes date in desired format
    let date = new Date();
    // MM/DD/YYYY HH:MM:SS
    var n = date.getDay();
    //get day of weeek
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day = new Array(4);

    for (i = 0; i < 4; i++) {
        n++;
        if (n > 6) {
            n = 0;
        }
        day[i] = weekday[n];
    }

    document.getElementById('d2').textContent = day[0];
    document.getElementById('d3').textContent = day[1];
    document.getElementById('d4').textContent = day[2];
    document.getElementById('d5').textContent = day[3];
    
    //Checks for update every 15 minutes

    setTimeout(updateForecast, 900000);
}