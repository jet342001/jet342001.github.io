const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const cities = jsonObject['towns'];

    for (let i = 0; i < cities.length; i++ ) {
      let town = cities[i].name; 
      if(town == "Preston" || town == "Fish Haven" || town == "Soda Springs" ){
        let card = document.createElement('section');
        let d = document.createElement('div')
        let h2 = document.createElement('h2');
        let motto = document.createElement('h5');
        let founded = document.createElement('h4');
        let population = document.createElement('h4');
        let rainfall = document.createElement('h4');
        let image = document.createElement("img");

        if(town == "Preston"){
          image.setAttribute('src', "images/Prestonid.jpg");
        }
        if(town == "Fish Haven"){
          image.setAttribute('src', "images/fishaven.jpg");
        }
        if(town == "Soda Springs"){
          image.setAttribute('src', "images/Soda.jpg");
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



