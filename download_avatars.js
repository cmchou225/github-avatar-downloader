const request = require('request');
const fs = require('fs');


console.log('Welcome to the GibHub Avatar Downloader!');



const GITHUB_USER = 'cmchou225',
      GITHUB_TOKEN = '94de8947e1520cf2ab222b5781915d39dd017c03';

function getRepoContributors(repoOwner, repoName, cb) {

  const options = {
    url: `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent':  "GitHub Avatar Downloader - Student Project"
    }
  }
  let content;
  request(options, function(err, response, body) {
    content = JSON.parse(body);
    console.log(typeof content);
    console.log(content);
    cb(content);
  });



}

function callback (array){
  console.log( " I'm IN THE FUCKING CALL BACK");
  console.log(typeof array);
  array.forEach(function (obj){
    console.log(obj['avatar_url']);
  });
}


// getRepoContributors("jquery", "jquery", function (err, result){
//   console.log('Errors', err);
//   console.log('result:', result);
// });

getRepoContributors('jquery', 'jquery', callback);