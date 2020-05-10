let date = new Date();

function writedate() {
    // MM/DD/YYYY HH:MM:SS
    let hour = date.getHours();
    var hourText = hour;
    if (hour > 12) {
        hourText = hour - 12;
        timeOfDay = 'PM';
    }
    document.getElementById("lastUpdate").innerHTML = document.lastModified;
}