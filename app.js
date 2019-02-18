console.log("Starting app-notes.js");

const notes=require('./notes.js');

console.log("Age:"+notes.age);
var res=notes.addNote();
console.log("notes.addNote:"+res);

console.log("notes.add:"+notes.add(4,5));
