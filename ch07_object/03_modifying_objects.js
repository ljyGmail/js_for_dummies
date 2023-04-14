// Using dot notation
const myLocation = {
  city: {
    id: 2643743,
    name: "London",
    coord: {
      lon: -0.1258,
      lat: 51.5085,
    },
    country: "GB",
    population: 9820000,
    timezone: 3600,
  },
};

console.log(`Latitude of myLocation is ${myLocation.city.coord.lat}`);

// Using square brackets notation
console.log(`city: ${myLocation["city"]}`);

console.log(`city name: ${myLocation.city["name"]}`);
console.log(`city name: ${myLocation["city"]["name"]}`);

// for (const property in document) {
//   console.log(`${property}: ${document[property]}`);
// }
