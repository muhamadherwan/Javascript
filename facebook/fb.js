var database = [
  {
    username:"CJ Reynolds",
    password:"codinggarden"
  },
  {
    username:"Brad",
    password:"123"
  },
  {
    username:"Mosh",
    password:"321"
  }

];

var newsFeed = [
  {
    username:"Brad Traversi",
    timeline:"Triversi media is kool!!!!"
  },
  {
    username:"Mosh Mahemedi",
    timeline:"Lets go programming with Mosh"
  }
];

function isUserValid( username, password ) {
  for ( var i=0; i < database.length; i++) {

    if ( database[i].username === username && database[i].password === password ) {
      return true;
    } 
  }
  return false;
}  

function signIn( username, password ) {
  if (isUserValid( username, password )) {
    console.log(newsFeed);
  } else {
    console.log("Invalid Username & Password");
  }
 
}

var usernamePrompt = prompt("Please enter your username");
var passwordPrompt = prompt("Please enter your password");

signIn( usernamePrompt, passwordPrompt);

