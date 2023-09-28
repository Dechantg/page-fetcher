
const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

// console.log(args);

// const url = args[0];
const file = args[1];


request(args[0], (error, response, body) => {
  if (error) {
    console.log('error:', error);
    process.exit();
  } 

  fs.writeFile(args[1], body, (err) => {
    if (err) {
        console.log('Error writing to file:', err);
      process.exit();
    } else {
      console.log(`file downloaded and saved ${body.length} bytes to ${file}`);
    }

  })

});