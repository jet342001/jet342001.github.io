const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const cities = jsonObject['towns'];

    for (let i = 0; i < cities.length; i++) {
      let town = cities[i].name;
      if (town == "Preston" || town == "Fish Haven" || town == "Soda Springs") {
        let card = document.createElement('section');
        let d = document.createElement('div')
        let h2 = document.createElement('h2');
        let motto = document.createElement('h5');
        let founded = document.createElement('h4');
        let population = document.createElement('h4');
        let rainfall = document.createElement('h4');
        let image = document.createElement("img");

        if (town == "Preston") {
          image.setAttribute('src', "images/Prestonid.jpg");
        }
        if (town == "Soda Springs") {
            image.setAttribute('src', "images/Soda.jpg");
        }
        if (town == "Fish Haven") {
          image.setAttribute('src', "images/fishaven.jpg");
        }


        h2.textContent = cities[i].name;
        motto.textContent = cities[i].motto;
        founded.textContent = "Year founded: " + cities[i].yearFounded;
        population.textContent = "Town population: " + cities[i].currentPopulation;
        rainfall.textContent = "Yearly average reainfall: " + cities[i].averageRainfall;

        d.appendChild(h2);
        d.appendChild(motto);
        d.appendChild(founded);
        d.appendChild(population);
        d.appendChild(rainfall);
        card.appendChild(d);
        card.appendChild(image);

        document.querySelector('div.cities').appendChild(card);

      }
    }
  });

document.addEventListener('DOMContentLoaded', onDocumentLoad);

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('responsive')
}, false);




function onDocumentLoad() {
  //uses document load to pull up info. 
  writedate();
  WebFont.load({
    google: {
      families: ["Roboto"]
    }
  });
}

function writedate() {
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

  var tday = myDay + ", " + dayNum + " " + myMon + " " + myYear;
  document.getElementById("lastUpdate").innerHTML = tday;
}