var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let randomBtn = document.getElementById("random");

const setGradientBackground = () => {
    let chosenColor = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
    body.style.background = chosenColor;

    rgbIndicator();
    random.style.background = chosenColor;
}

const rgbIndicator = () => {
    let h3 = document.querySelector("h3");

    h3.textContent = body.style.background + ";";
}

const getRandomIntZeroToMax = (max) => {
    max = Math.floor(max);

    return Math.floor(Math.random() * (max + 1));
}

/* color type의 input element 는 hex값만 받는다. 
따라서 input value 값을 바꾸려면 rgb값을 hex값으로 변환시켜야 함. */
function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

function randomColor() {
    let r1 = getRandomIntZeroToMax(255);
    let g1 = getRandomIntZeroToMax(255);
    let b1 = getRandomIntZeroToMax(255);
    let r2 = getRandomIntZeroToMax(255);
    let g2 = getRandomIntZeroToMax(255);
    let b2 = getRandomIntZeroToMax(255);

    let randomGradient = `linear-gradient(to right, rgb(${r1}, ${g1}, ${b1}), \
    rgb(${r2}, ${g2}, ${b2}))`;

    body.style.background = randomGradient;
    random.style.background = randomGradient;

    let color1HexValue = ConvertRGBtoHex(r1, g1, b1);
    let color2HexValue = ConvertRGBtoHex(r2, g2, b2);

    color1.value = color1HexValue;
    color2.value = color2HexValue;

    rgbIndicator();
}

setGradientBackground();

color1.addEventListener("input", setGradientBackground);
color2.addEventListener("input", setGradientBackground);

random.addEventListener("click", randomColor);