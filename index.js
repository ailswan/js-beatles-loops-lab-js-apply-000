// add solution here
function theBestlesPlay(musicians,instruments) {
  var array = [];
  
  for (var i = 0; i< musicians.length; i++) {
    let string = musicians[i] + instruments[i];
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