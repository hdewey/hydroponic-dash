// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// for shell scripts
const { exec } = require("child_process");

// Creates a client
const storage = new Storage();

let date_ob = new Date();
let name = `plant_${date_ob.getHours()}-${("0" + (date_ob.getMonth() + 1)).slice(-2)}-${("0" + date_ob.getDate()).slice(-2)}-${date_ob.getFullYear()}.jpg`

const bucketName = 'growth-pics';
const srcFilename = name;
const destFilename = './public/photos/current.jpg';

const options = {
  // The path to which the file should be downloaded, e.g. "./file.txt"
  destination: destFilename,
};

async function clean() {
  exec(`rm ./public/photos/current.jpg`, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`current photo deleted...`);
  });
}

async function download() {
  // Downloads the file
  await storage
    .bucket(bucketName)
    .file(srcFilename)
    .download(options);

  console.log(
    `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
  );
}

module.exports.download = download;
module.exports.clean = clean;
