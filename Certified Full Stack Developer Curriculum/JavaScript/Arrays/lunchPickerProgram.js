const lunches = [];



function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (!arr.length) {
    console.log("No lunches to remove.")
  }

  else {
    const lunchItem = arr.pop();
    console.log(`${lunchItem} removed from the end of the lunch menu.`);
  }
  return arr;
}

function removeFirstLunch(arr) {

  if (!arr.length) {
    console.log("No lunches to remove.")
  } 

  else {
    const lunchItem = arr.shift();
    console.log(`${lunchItem} removed from the start of the lunch menu.`);

  }

  return arr;
}

function getRandomLunch(arr) {
  const arrLength = arr.length;

  if (!arr.length) {
    console.log("No lunches available.");
  } 
  
  else {
    const minIdx = 0;
    const maxIdx = arrLength;

    const randomIdx = Math.trunc(Math.random() * (maxIdx - minIdx) + minIdx);

    console.log(`Randomly selected lunch: ${arr[randomIdx]}`);
  } 
}

function showLunchMenu(arr) {
  if (!arr.length) {
    console.log("The menu is empty.");
  }

  else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}
