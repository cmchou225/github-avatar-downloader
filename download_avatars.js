const request = require('request');
const fs = require('fs');

console.log('Welcome to the GibHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // request.get()

}

getRepoContributors("jquery", "jquery", function (err, result){
  console.log('Errors', err);
  console.log('result:', result);
});