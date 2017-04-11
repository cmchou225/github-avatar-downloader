const request = require('request');
const fs = require('fs');

console.log('Welcome to the GibHub Avatar Downloader!');

// 'https://cmchou225@c2bbe98c0d47f95a8ca29d56e21634093f79f8c4api.github.com/repos/jquery/jquery/contributors'

const GITHUB_USER = "cmchou225",
      GITHUB_TOKEN = "c2bbe98c0d47f95a8ca29d56e21634093f79f8c4";

function getRepoContributors(repoOwner, repoName) {

  const options = {
    url: `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent':  "GitHub Avatar Downloader - Student Project"
    }
  }

  let body = "";
  request(options)
  .on('error' , function (err) {
    console.log(`Error ${err}`)
    throw err;
   })
  .on('response', function (response) {
    console.log(`${response.statusCode} ${response.statusMessage}`)
  })
  .on('data', function (chunk) {
    body += chunk;
  })
  .on('end', function () {
    console.log(JSON.parse(body));
  })
}



// getRepoContributors("jquery", "jquery", function (err, result){
//   console.log('Errors', err);
//   console.log('result:', result);
// });

getRepoContributors('jquery', 'jquery');