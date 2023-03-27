
async function getRealtimeData() {
    try {
        // Fetch the GTFS real-time data
        const response = await fetch("https://kordis-jmk.cz/gtfs/gtfsReal.dat");
        if (!response.ok) {
          const error = new Error(`${response.url}: ${response.status} ${response.statusText}`);
          error.response = response;
          throw error;
          //process.exit(1);
        }
        const buffer = await response.arrayBuffer();
        const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
          new Uint8Array(buffer)
        );
        console.log(feed); 
        return feed; 
        }
        catch (error) {
            console.log(error);
            //process.exit(1);
        }

}

getRealtimeData(); 

/*

async function getDepartures(homeLat, homeLong) {
    try {
      // Fetch the GTFS real-time data
      const response = await fetch("https://kordis-jmk.cz/gtfs/gtfsReal.dat");
      if (!response.ok) {
        const error = new Error(`${response.url}: ${response.status} ${response.statusText}`);
        error.response = response;
        throw error;
        //process.exit(1);
      }
      const buffer = await response.arrayBuffer();
      const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
        new Uint8Array(buffer)
      );
      //console.log(feed); 
      
      
      // Get the stop information from the GTFS static data
      const staticResponse = await fetch("https://kordis-jmk.cz/gtfs/gtfs.zip");
      if (!staticResponse.ok) {
        const error = new Error(`${staticResponse.url}: ${staticResponse.status} ${staticResponse.statusText}`);
        error.response = staticResponse;
        throw error;
        //process.exit(1);
      }
      const staticBuffer = await staticResponse.arrayBuffer();
      const staticFeed = await gtfsToJSON(staticBuffer);
      const stops = staticFeed.stops;
      console.log(stops); 
    
      // Find the nearest stop
      const nearestStop = getNearestStop(homeLat, homeLong, stops);
      
      // Query the GTFS real-time data for the current departures
      const departures = [];
      feed.entity.forEach((entity) => {
        if (entity.tripUpdate) {
          const update = entity.tripUpdate;
          update.stopTimeUpdate.forEach((stopUpdate) => {
            if (stopUpdate.stopId === nearestStop.stop_id) {
              const departure = {
                routeId: update.trip.routeId,
                tripId: update.trip.tripId,
                scheduledTime: stopUpdate.arrival.time.low,
                estimatedTime: stopUpdate.departure.time.low
              };
              departures.push(departure);
            }
          });
        }
      });
      
      // Return the departures
      return departures;
    }
    catch (error) {
      console.log(error);
      //process.exit(1);
    }
}

  // Helper function to convert GTFS static data to JSON
async function gtfsToJSON(buffer) {
    const zip = await JSZip.loadAsync(buffer);
    const files = zip.file(/\.txt$/);
    const feed = {};
    for (const file of files) {
      const content = await file.async("string");
      const name = file.name.replace(".txt", "");
      feed[name] = csvToJSON(content);
    }
    return feed;
}

function csvToJSON(csv) {
    const lines = csv.split("\n");
    const result = [];
    const headers = lines[0].split(",");
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(",");
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }
      result.push(obj);
    }
    return result;
}

