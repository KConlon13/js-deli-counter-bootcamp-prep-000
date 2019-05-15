
var katzDeli = [];

function takeANumber (katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing (katzDeli) {
  var i=0;
  while (katzDeli.length>0) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Now serving ";
  }
}

function currentLine ()