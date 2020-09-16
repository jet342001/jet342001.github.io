var json = $.getJSON('scoots.json');

    document.getElementById('metro-r-half').textContent = json.rentals.metro.halfdayres;
    document.getElementById('metro-r-full').textContent = json.rentals.metro.fulldayres;
    document.getElementById('metro-nr-half').textContent = json.rentals.metro.halfnores;
    document.getElementById('metro-nr-full').textContent = json.rentals.metro.fulldaynres;



