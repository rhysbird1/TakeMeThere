var latMainland = {
    min: 50.82,
    max: 54.30
}

var longMainland = {
    min: -0.45,
    max: -3.00
}

var latRndm;
var longRndm;

function getRandomLat(max, min){
    latRndm = Math.random() * (max - min) + min;
}

function getRandomLong(max, min){
    longRndm = Math.random() * (max - min) + min;
}

getRandomLat(latMainland.max, latMainland.min);
console.log("Lat: " + latRndm);
getRandomLong(longMainland.max, longMainland.min);
console.log("Long: " + longRndm);

function myMap() {
    var mapProp = {
      center:new google.maps.LatLng(latRndm,longRndm),
      zoom:10,
    };
    
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
        position:mapProp.center,
    });

    marker.setMap(map);
}
