
import fetch from "node-fetch";


// Define your location coordinates
const homeLat = 49.2077738; //   49.2077738
const homeLong = 16.6241738; //  16.6241738
//50.091097,14.401617 - Prazsky Hrad: doesn't work becuase the API is based only on Morava region  
//49.208668,16.59438 - MZK Brno
//49.256769,16.46176 - Hrad Veveri
//49.194493,16.599177 - Spilberk Castle - depends where we're standing 




const lat1 = homeLat;
const lon1 = homeLong;

function toRadians(degrees) {
  return degrees * Math.PI / 180;
}


// Helper function to calculate the distance between two points in meters - HAVERSINE FORMULA 

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth's radius in meters
  const phi1 = toRadians(lat1);
  const phi2 = toRadians(lat2); 
  const deltaPhi = toRadians(lat2 - lat1); //delta = change
  const deltaLambda = toRadians(lon2 - lon1);
  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c); //in meters 
}


function getNearestStop(homeLat, homeLong, stops) {
  let nearestStop = null; 
  let nearestDistance = Infinity; 

  stops.forEach(stop => {

    const stopLat = stop.Latitude;
    const stopLong = stop.Longitude; 

    const distance = getDistance(homeLat, homeLong, stopLat, stopLong); 

    if (distance < nearestDistance) {
      nearestStop = stop;
      nearestDistance = distance;
    }

  }); 

  return nearestStop; 

}


// Send the request to the API endpoint

const apiEndpoint = 'https://mapa.idsjmk.cz/api/stops.json'
//let fetchPromise = fetch(apiEndpoint); 
//console.log(fetchPromise); 

const apiKey = 'AIzaSyDsfgP_P8RwqHPJTrk4EVRrVPYcbPx-Qqk'

const headers = { Authorization: `apikey ${apiKey}` };


//fetch promise

fetch(apiEndpoint, {headers})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Get the nearest bus stop from the response
    const nearestStop = getNearestStop(homeLat, homeLong, data);
    const dist = getDistance(homeLat, homeLong, nearestStop.Latitude, nearestStop.Longitude);  
    console.log(`The nearest tram/bus stop is ${dist} meters away: ${nearestStop.Name} (${nearestStop.Latitude}, ${nearestStop.Longitude})`); 
  })
  .catch(error => console.error(`Could not obtain data from the source: ${error}`));


