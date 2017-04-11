const request = require('request');
const fs = require('fs');

console.log('Welcome to the GibHub Avatar Downloader!');

const GITHUB_USER = "cmchou225",
      GITHUB_TOKEN = "c2bbe98c0d47f95a8ca29d56e21634093f79f8c4";

function getRepoContributors(repoOwner, repoName, cb) {
  let requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
  console.log(requestURL);
}

getRepoContributors("jquery", "jquery", function (err, result){
  console.log('Errors', err);
  console.log('result:', result);
});

getRepoContributors('jquery', 'jquery');