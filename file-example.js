console.log('Hello world!');

const fs = require('fs');

fs.appendFile('greetings.txt', 'Hello World', function (err){
  if(err)
  console.log('Unable to Write file');
});

fs.appendFileSync('greetings.txt', 'Hello World1');
