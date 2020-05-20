document.addEventListener('DOMContentLoaded', onDocumentLoad); 

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

function onDocumentLoad(){
    writedate();
}
let date = new Date();

function writedate() {
    // MM/DD/YYYY HH:MM:SS

    var n = date.getDay();
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    var myDay = weekday[n];
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
    var tday = myDay + ", "  + dayNum +" " + myMon + " " + myYear;

    document.getElementById("lastUpdate").innerHTML = tday;
}