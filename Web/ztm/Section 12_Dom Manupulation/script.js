var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function createListElement() {
	var makeLi = document.createElement('li');		// li를 만드는 makeLi 변수를 정의.
	var makeButton = document.createElement('button');

	makeLi.appendChild(document.createTextNode(input.value));	// li를 만들고 텍스트노드를 자식으로 붙인다.
	ul.appendChild(makeLi);		// ul 아래에 자식으로 해당 li를 붙인다.
	makeLi.appendChild(makeButton);
	makeButton.innerHTML = "delete";
	input.value = "";

	liEvent();
	buttonListElement();
}

function addListByClick() {
	if (input.value.length > 0) {
		createListElement();
	}
}

function addListByPressEnter(event) {
	if (input.value.length > 0 && event.key === 'Enter') {
		createListElement();
	}
}

function liEvent() {
	var li = document.querySelectorAll('li');

	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener('click', makeDone);
	}
}

function makeDone() {
	this.classList.toggle('done');
}


function buttonListElement() {
	var button = document.querySelectorAll('li button');

	for (var i = 0; i < button.length; i++) {
		button[i].addEventListener('click', clearParentElement);
	}
}

function clearParentElement() {
	this.parentNode.remove();
}


liEvent();
buttonListElement();

button.addEventListener('click', addListByClick);

input.addEventListener('keypress', addListByPressEnter)