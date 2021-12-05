const request = require('request');

let breed = process.argv.slice(2);
//console.log('breed search in command line: ', breed);

request('https://api.thecatapi.com/v1/breeds/search?q=${breed}', function (error, response, body) {
  if (error) {
    console.error('Could not find URL:', error); // Print the error if one occurred
  }

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  //console.log('body:', body); // Prints the body of catapi.com
  //console.log(typeof body); // type of body is string
  
  const data = JSON.parse(body); //use JSON.parse to convert the JSON string into an actual object
  //console.log(data); // prints the body as an object
  //console.log(typeof data); // data type is object
  console.log(data[0].description); // first entry in data array, description
  
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i].description === undefined) {
  //     console.log("Breed not foound");
  //   }
  // }
});

// const catDescrip = function(breed) {
//   console.log(' Cat Description ', data[??].description);
// };

// const catDescrip = function(breed) {
//   console.log(' Cat Description ', data[??].description);
// };

// const breedDetails = function (breed, done) {
//   request('https://api.thecatapi.com/v1/breeds/search?q=sib', function(error, response, body) {
//     if (error) {
//       console.error('Could not find URL:', error); // Print the error if one occurred
//     }

//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

//     //console.log('body:', body); // Prints the body of catapi.com
//     //console.log(typeof body); // type of body is string

//     const data = JSON.parse(body); //use JSON.parse to convert the JSON string into an actual object
//     //console.log(data); // prints the body as an object
//     //console.log(typeof data); // data type is object
//     //console.log(data[0].description); // first entry in data array, description

//   });
// };

const request = require('request');
request('http://example.edu/', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});