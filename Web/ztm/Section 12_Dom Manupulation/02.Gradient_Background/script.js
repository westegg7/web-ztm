var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.getElementById('random');

/* html 태그에 직접 onclick="setGradient()" 형태로 붙일 수도 있다.*/ 
function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function getRandomGradient() {
    let r1 = getRandomIntInclusive(0, 255);
    let g1 = getRandomIntInclusive(0, 255);
    let b1 = getRandomIntInclusive(0, 255);
    let r2 = getRandomIntInclusive(0, 255);
    let g2 = getRandomIntInclusive(0, 255);
    let b2 = getRandomIntInclusive(0, 255);
    let randomGradient = "linear-gradient(to right,rgb("
	+ r1 + ", " + g1 +", " + b1 
	+ "), rgb("
	+ r2 + ", " + g2 +", " + b2
	+ "))"; 

    body.style.background = randomGradient;
	random.style.background = randomGradient;

    css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", getRandomGradient);