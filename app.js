console.log("Starting app-notes.js");

//const notes=require('./notes.js');
const _ = require('lodash');

console.log(_.isString('MyName'));
console.log(_.isString(true));
//console.log("Age:"+notes.age);
//var res=notes.addNote();
//console.log("notes.addNote:"+res);

//console.log("notes.add:"+notes.add(4,5));


var fileteredArray=_.uniq(['Siva',1,'Siva',1,2,3,4]);

console.log(fileteredArray);
