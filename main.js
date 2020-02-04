function pageStart(){
    document.getElementById("cbMainland").checked = true;
    selectedRegions.push("Mainland");
}

var selectedRegions = [];

var Mainland = {
    lat: { min: 50.82, max: 54.30 },
    long: { min: -0.45, max: -3.00 }
}

var Scotland = {
    lat: { min: 55.3, max: 57.3 },
    long: { min: -2.5, max: -4.9 }
}

var Wales = {
    lat: { min: 51.57, max: 53.2 },
    long: { min: -3.06, max: -4.52 }
}

var Ireland = {
    lat: { min: 52.25, max: 55.05 },
    long: { min: -6.04, max: -9.76}
}

function getRandomLatLng(max, min) {
    return Math.random() * (max - min) + min;
}

function selectRndmRegion(){
    let regionFromArr = selectedRegions[Math.floor(Math.random() * selectedRegions.length)];
    
    if      (regionFromArr === 'Mainland') { return Mainland; } 
    else if (regionFromArr === 'Scotland') { return Scotland; } 
    else if (regionFromArr === 'Wales')    { return Wales; } 
    else if (regionFromArr === 'Ireland')  { return Ireland; }
}

function checkboxRegion(region) {
    let cbElementID = document.getElementById("cb" + region);
    if (cbElementID.checked == true) {
        selectedRegions.push(region);
    } else {
        let index = selectedRegions.indexOf(region);
        selectedRegions.splice(index, 1);
    }

    console.log(selectedRegions);
}

var latRndm;
var longRndm;
var regionRndm;

function createMap() {
    if (!selectedRegions.length) {
        alert("Please select a region.");
        return;
    }
    changeSearchBtnStyle();
    changeDOMAttribute("searchBtn", "value", "Search Again");

    latRndm = getRandomLatLng(selectRndmRegion().lat.max, selectRndmRegion().lat.min);
    longRndm = getRandomLatLng(selectRndmRegion().long.max, selectRndmRegion().long.min);
    console.log("Lat: " + latRndm);
    console.log("Long: " + longRndm);

    var mapProp = {
        center: new google.maps.LatLng(latRndm, longRndm),
        zoom: 10,
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var marker = new google.maps.Marker({
        position: mapProp.center,
    });

    marker.setMap(map);
}

function changeDOMAttribute(eleId, attr, text) {
    document.getElementById(eleId).setAttribute(attr, text);
}

function changeSearchBtnStyle() {
    document.getElementById("googleMap").style.display = "block";
    document.getElementById("searchBtn").style.backgroundColor = "#f0f0f0";
    document.getElementById("searchBtn").style.color = "#000";
    document.getElementById("takeMeThereBtn").style.display = "inline-block";
}

function searchPlace() {
    window.open('http://google.com/search?q=' + latRndm.toFixed(2) + ', ' + longRndm.toFixed(2) + ' hotel');
}
