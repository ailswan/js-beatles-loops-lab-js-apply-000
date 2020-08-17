// add solution here
function theBeatlesPlay(musicians,instruments) {
  var array = [];
  
  for (var i = 0; i< musicians.length; i++) {
    let string = musicians[i] +" plays " + instruments[i];
    array.push(string);
  }
  return array;
}


function johnLennonFacts(john) {
  var i = 0;
 while (i < john.length) {
   john[i] += "!!!";
   i++;
 } 
 return john;
}


function iLoveTheBeatles() {
  
}