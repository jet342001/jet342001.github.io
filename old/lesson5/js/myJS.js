document.addEventListener('DOMContentLoaded',onDocumentLoad); 
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

function onDocumentLoad(){
    writedate();
    //initMap();
}

let date = new Date();
function writedate() {
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
    var myDay = weekday[n];
    //get month
    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var m = date.getMonth();
    var myMon = month[m];
    var dayNum = date.getDate()
    var myYear = date.getFullYear();
    var message = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."
    //formate data then write.
    if(myDay == "Friday"){
        document.getElementById("summary").innerHTML = message;   
    }
    var tday = myDay + ", "  + dayNum +" " + myMon + " " + myYear;
    document.getElementById("lastUpdate").innerHTML = tday;
}

/*
function initMap() {
    //location preston
    var preston = 83263;
    // The map, centered at Preston
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: preston});
    // The marker, positioned at Preston
    var marker = new google.maps.Marker({position: preston, map: map});
    }
    */