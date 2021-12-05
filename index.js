//const request = require('request');
//DID NOT NEED to request require here (showed up as eslint error)

const { fetchBreedDescription } = require('./breedFetcher');

//Dynamic Breed Name
let breedName = process.argv.slice(2);
//console.log(breed); // command line search by breed name

//Our index.js file should require breedFetcher and call it, like this:
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});