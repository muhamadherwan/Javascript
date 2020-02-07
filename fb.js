// # Create an object and an array which we will use in our facebook exercise. 


// * 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var user = {
  username:"CJ Reynolds",
  pasword:"codinggarden",
};

console.log(user);


// * 2. Create an array which contains the object you have made above and name the array "database".
var database = [user];
console.log(database); 

// * 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
  {
    username: "CJ Reynolds",
    timeline: "Coding Garden"
  },
  {
    username: "Mosh Mahedi",
    timelline: "Programming with Mosh"
  },
  {
    username: "Brad Traversi",
    timeline: "Traversi Media"
  }
];

console.log(newsfeed);


