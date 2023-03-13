

// Define the location of the nearest stop
const nearestStopLat = 37.7833; // latitude of the nearest stop
const nearestStopLon = -122.4167; // longitude of the nearest stop

const homeLat = 49.2077738; //   49.2077738
const homeLong = 16.6241738;


// Define the GTFS-realtime feed URL
const gtfsRtFeedUrl = 'https://kordis-jmk.cz/gtfs/gtfsReal.dat';

// Define the GTFS static data URL
const gtfsStaticDataUrl = 'https://kordis-jmk.cz/gtfs/gtfs.zip';

// Create a new GTFS-realtime client (a new instance of FeedMessage class from the GtfsRealtimeBndings module)
const gtfsRtClient = new GtfsRealtimeBindings.FeedMessage();

// Load the GTFS-realtime feed
fetch(gtfsRtFeedUrl)
  .then(response => response.arrayBuffer())
  .then(buffer => {
    gtfsRtClient.decode(buffer);
    console.log(gtfsRtClient); 
  });



/*
// Create a new GTFS static data client
const gtfsStaticDataClient = new TransitGtfsRtJs.StaticData({
  url: gtfsStaticDataUrl
});

// Find the nearest stop
const nearestStop = gtfsStaticDataClient.findNearestStop(nearestStopLat, nearestStopLon);

// Get the current time
const now = new Date();

// Find the next arrival and departure times at the nearest stop
const arrivalsAndDepartures = gtfsRtClient.entity.filter(entity => {
  return entity.tripUpdate && entity.tripUpdate.stopTimeUpdate.some(stopTimeUpdate => {
    return stopTimeUpdate.stopId === nearestStop.id &&
           new Date(stopTimeUpdate.arrival.time.low * 1000) > now;
  });
}).map(entity => {
  const trip = gtfsStaticDataClient.getTrip(entity.tripUpdate.trip.tripId);
  const route = gtfsStaticDataClient.getRoute(trip.routeId);
  const stopTimeUpdate = entity.tripUpdate.stopTimeUpdate.find(stopTimeUpdate => stopTimeUpdate.stopId === nearestStop.id);
  return {
    routeShortName: route.shortName,
    arrivalTime: new Date(stopTimeUpdate.arrival.time.low * 1000),
    departureTime: new Date(stopTimeUpdate.departure.time.low * 1000)
  };
}).sort((a, b) => {
  return a.arrivalTime - b.arrivalTime;
});

// Log the results
console.log(`Next arrivals and departures at ${nearestStop.name}:`);
arrivalsAndDepartures.forEach(arrivalAndDeparture => {
  console.log(`${arrivalAndDeparture.routeShortName}: ${arrivalAndDeparture.arrivalTime.toLocaleTimeString()} (arrival), ${arrivalAndDeparture.departureTime.toLocaleTimeString()} (departure)`);
}); */