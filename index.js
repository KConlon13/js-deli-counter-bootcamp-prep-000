var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(katzDeliLine.length + 1);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing (katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    i++
  }
  if (katzDeliLine.length > 0) {
    katzDeliLine.unshift(katzDeliLine.length - [i])
    return (`Currently serving ${katzDeliLine}`)
  } else {
  return "There is nobody waiting to be served!"
  }
}

let katzDeli = [];

function currentLine (katzDeliLine) {
}



