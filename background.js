var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("enter");
var input = document.getElementById("user");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

// for the background//
function setGradient() {
	body.style.background = "linear-gradient(to right," 
	+ color1.value
	+ ", "
	+color2.value
	+")";
};
//we called the addEventListener by function to call a specifect element
color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li");//we used the document.createElement to create element with specified name
	li.appendChild(document.createTextNode(input.value)); //to create a textnode and added the node at last 
	ul.appendChild(li); 
	input.value = ""; 

	function crossOut() {
		li.classList.toggle("done");// this method check the selected for visiblity to show or hide element
	}

	li.addEventListener("click",crossOut);

	// delete button //
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);



	function deleteListItem(){
		li.classList.add("delete")
	}

}

// to appear the list //
function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}
// 
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) { 
		createListElement();
	} 
}


button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

