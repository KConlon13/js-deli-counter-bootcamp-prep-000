
var katzDeli = [];

function takeANumber (katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing (katzDeli) {
  let i=0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } return `Currently serving ${katzDeli.shift()}.`;
}

var katzDeliLine = [];

function currentLine (katzDeliLine) {
  for (var i=0; i<katzDeli.length; i++) {
    katzDeliLine.push([i+1] + katzDeli[i]);
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } return `The line is currently:` + katzDeliLine;
}


