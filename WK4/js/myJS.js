let date = new Date();
document.addEventListener('DOMContentLoaded', onDocumentLoad); 


function onDocumentLoad(){
    writedate();
}
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