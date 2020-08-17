// add solution here
function theBestlesPlay(musicians,instruments) {
  var counter = [];
  
  for(var i = 0; i< musicians.length; i++) {
    let string = musicians[i] + instruments[i];
    counter.push(string);
  }
  return counter;
}