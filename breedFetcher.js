const request = require('request');

//Dynamic Breed Name
let breed = process.argv.slice(2);
//console.log(breed); // command line search by breed name

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  
  //Edge Case: Request Failed
  if (error) {
    return console.error('Could not find URL:', error); // Print the error if one occurred
  }

  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  //console.log('body:', body); // Prints the body of catapi.com
  //console.log(typeof body); // type of body is string
  
  const data = JSON.parse(body); //use JSON.parse to convert the JSON string into an actual object
  //console.log(data); // prints the body as an object
  //console.log(typeof data); // data type is object

  // Edge Case: Breed Not Found
  if (!data[0]) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description); // first entry in data array, description
  }

});








