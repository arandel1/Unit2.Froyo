// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
//They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
// When they view the browser console, they observe a table listing how many of each flavor they have ordered.
// In this case, they will be able to observe that they have ordered:
// three vanilla, two coffee, and one strawberry froyo.

console.log("Froyo Flavors");
//just testing to see if javascript and HTML are linked.


// 1. The user is prompted for froyo flavors upon entering the website.

const userInputString = prompt("Please enter your froyo flavors separated by commas:", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");


// 2. The user's input string is split into an array of strings.
const flavorArray = userInputString.split(",");
console.log(flavorArray)

// 3. A loop is used to iterate through the array of flavors.

// const flavors = Object.values(flavorArray);
//   for (let i=0; i < flavorArray.length; i++) {
// }

// console.log(flavors);

// 3. An object is used to keep count of how many orders there are of each flavor. (Create an empty object to hold counts that look like the below:)
// {
//   vanilla: 3,
//   strawberry: 1,
//   coffee: 2,
// }

// For each flavor, ask: is there a count for this flavor? 
// IF yes, update the count (+1)
// ELSE, start counting that flavor

// {
//   vanilla: 3, 
//   strawberry: 1,
//   chocolate: 2,

// }


// after our loop ends, display a table withhow many of each flavor they want. 

const flavorCounts = {}

// loop for an array of flavors

for(let i=0; i<flavorArray.length;i++){
  const flavorsSoFar = Object.keys(flavorCounts);
  if(flavorsSoFar.includes(flavorArray[i])){
    flavorCounts[flavorArray[i]] += 1
  }
  else {
    flavorCounts[flavorArray[i]] = 1
  }
}

console.table(flavorCounts)
//The program correctly counts the number of each flavor in the user's input.

// The logic for counting the frequencies of elements in an array is organized into a function that returns an object.

// Names are consistent and meaningful.

// The console output changes depending on the user's input.