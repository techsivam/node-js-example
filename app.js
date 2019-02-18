console.log("Starting app-notes.js");

//const notes=require('./notes.js');
const _ = require('lodash');

console.log(_.isString('MyName'));
console.log(_.isString(true));
//console.log("Age:"+notes.age);
//var res=notes.addNote();
//console.log("notes.addNote:"+res);

//console.log("notes.add:"+notes.add(4,5));


var fileteredArray=_.uniq(['Sivam',1,'Sivam',1,2,3,4]);

console.log(fileteredArray);
var cmd=process.argv[2];
if(cmd=='add'){
console.log('Add Command');
} else if (cmd=='list') {
  console.log('List Command');
}else if (cmd=='read') {
  console.log('Read Command');
}else if (cmd=='remove') {
  console.log('Remove Command');
}else  {
  console.log('Not recoganized Command');
}
