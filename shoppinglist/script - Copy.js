// # Add input value when to list 	button is submit
// # Add input value to list when enter key is press

// get element from form
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

/*
// event lisentner.trigger action when button is click
// whenbutton click, add a new li in the form ul
button.addEventListener("click", function(){
	if ( input.value.length > 0 ) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
})

// event lisentner.trigger action when enter key is click
// when enter key is click, add a new li in the form ul
input.addEventListener("keypress", function(){
	if ( input.value.length > 0 && event.keyCode === 13 ) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
})
*/

/* # Refactoring above Codes */

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function addListAfterClick(){
	if ( inputLength() > 0 ) {
		createListElement();
	}
}

function addListAfterKeypress(event){
	if ( inputLength() > 0 && event.keyCode === 13 ) {
		var li = document.createElement("li");
		createListElement();
	}
}

// event lisentner.trigger action when button is click
// whenbutton click, add a new li in the form ul
button.addEventListener("click", addListAfterClick);

// event lisentner.trigger action when enter key is click
// when enter key is click, add a new li in the form ul
input.addEventListener("keypress", addListAfterKeypress);
