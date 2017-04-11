const request = require('request');
const fs = require('fs');

const repoOwner = process.argv[2];
const repoName = process.argv[3];

console.log('Welcome to the GibHub Avatar Downloader!');



const GITHUB_USER = 'cmchou225',
      GITHUB_TOKEN = '94de8947e1520cf2ab222b5781915d39dd017c03';

function getRepoContributors(repoOwner, repoName, cb) {
  if(!repoOwner || !repoName)
    return console.log("Please enter both the repository owner and repository.");
  const options = {
    url: `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent':  "GitHub Avatar Downloader - Student Project"
    }
  }
  let content;
  request(options, function(err, response, body) {
    content = JSON.parse(body);
    console.log(content);
    cb(content);
  });


}

function callback (array){

  array.forEach(function (obj){
    let path = `avatars/${obj['login']}.jpg`;
    downloadImageByURL(obj['avatar_url'], path);
  });
}

function downloadImageByURL(url, filePath){
  request.get(url)
  .on('error' , function (err) {
    throw err;
   })
  .on('response', function (response) {
    console.log('Response Status Code: ', response.statusMessage, 'Response content ', response.headers['content-type']);
   })
  .pipe(fs.createWriteStream(filePath))
}
// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");

// getRepoContributors("jquery", "jquery", function (err, result){
//   console.log('Errors', err);
//   console.log('result:', result);
// });

getRepoContributors(repoOwner, repoName, callback);







