var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

liEvent();
buttonListElement();


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement('button')
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button);
	button.innerHTML = "delete";
	input.value = "";

	liEvent();
	buttonListElement();
}

function addListByClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListByPressEnter(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListByClick);

input.addEventListener("keypress", addListByPressEnter);


function liEvent() {
	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener("click", makeDone);
	}
}

function makeDone() {
	this.classList.toggle('done');
}

function buttonListElement() {
	var button = document.querySelectorAll('li button');	// li 의 자식인 button을 지정
	for (var i = 0; i < button.length; i++) {
		button[i].addEventListener("click", clearElement);	// this = button
	}
}

function clearElement() {
	for (var i = 0; i < li.length; i++) {
		this.parentNode.remove();		// this는 해당 함수를 호출한 객체.
	}
}



