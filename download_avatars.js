require('dotenv').config();

const request = require('request'),
      fs = require('fs'),
      repoOwner = process.argv[2],
      repoName = process.argv[3];

console.log('Welcome to the GibHub Avatar Downloader!');

const GITHUB_USER = process.env.DB_USER,
      GITHUB_TOKEN = process.env.DB_PASS;

//Main function to download avatar pictures  with repo owner and name input
function getRepoContributors(repoOwner, repoName, cb) {
  if(!repoOwner || !repoName)
    return console.log("Please enter both the repository owner and repository.");

  const options = {
    url: `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent':  "GitHub Avatar Downloader - Student Project"
    }
  }

  request(options, function(err, response, body) {
    if(err) {
      console.log("Error found", err);
      return;
    }
    console.log("Response Status Code: ", response.statusCode, "Response Message: ", response.statusMessage);
    const content = JSON.parse(body);
    cb(content);
  });

}

//callback function to loop through contributor objects extracting the avatar URL and downloads pictures into avatar folder
function callback (array){
  array.forEach(function (obj){
    let path = `avatars/${obj['login']}.jpg`;
    downloadImageByURL(obj['avatar_url'], path);
  });
}

//helper function to download avatar pictures with url and filepath input
function downloadImageByURL(url, filePath){
  request.get(url)
  .on('error' , function (err) {
    return console.log("Error found: ", err);
   })
  .on('response', function (response) {
    console.log('Response Status Code: ', response.statusMessage, 'Response content ', response.headers['content-type']);
   })
  .pipe(fs.createWriteStream(filePath))
}

getRepoContributors(repoOwner, repoName, callback);







