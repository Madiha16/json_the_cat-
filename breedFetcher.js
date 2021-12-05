const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {

    if (error) {//error as first param, null as second param in callback
      return callback(error, null);
    }
    const data = JSON.parse(body); //use JSON.parse to convert the JSON string into an actual object
    if (data[0] === undefined) {
      return callback("Breed not found", null);
    } else {
      return callback(null, data[0].description);
    };
  });
};

// //from Compass, what we want as an end result
// fetchBreedDescription('Siberian', (error, description) => {
//   //
// });
// //what I thought we wanted
// fetchBreedDescription("Siberian", printDescrip);
// //cb func that prints descrip?
// const printDescrip = function() {
//   //
// };
// //what we dont want as end result
// const breedDescription = fetchBreedDescription('Siberian');

module.exports = { fetchBreedDescription };





