//^ ████████████████████████████████████  GLOBAL SCOPE


var x = 'x';

function findName() {
var b = 'b'; 
return printName(); 
}

function printName() {
  var c = 'c' 
  return 'Andrei Neagoie'
}

function sayMyName() {
  var a = 'a'; 
  return findName()
}

c(sayMyName())