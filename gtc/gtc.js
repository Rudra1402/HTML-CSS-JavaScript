let discoTitle = document.getElementById("disco");
let colorValue = document.getElementById("value");
let answer = document.getElementById("res");
let col1 = String, col2 = String, col3 = String, col4 = String, col5 = String, col6 = String;
let c1 = document.getElementById("circle1");
let c2 = document.getElementById("circle2");
let c3 = document.getElementById("circle3");
let c4 = document.getElementById("circle4");
let c5 = document.getElementById("circle5");
let c6 = document.getElementById("circle6");

function createRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return rgbColor;
}

function createRandomHEX() {
    let hexColor = '#' + (Math.random().toString(16)).substring(2, 8);
    return hexColor;
}

setInterval(() => {
    discoTitle.style.color = createRandomRGB();
}, 200);

function setValue() {
    let n = Math.floor(Math.random() * 6) + 1;
    if (n == 1) {
        colorValue.innerText = 'Value / ' + col1;
    } else if (n == 2) {
        colorValue.innerText = 'Value / ' + col2;
    } else if (n == 3) {
        colorValue.innerText = 'Value / ' + col3;
    } else if (n == 4) {
        colorValue.innerText = 'Value / ' + col4;
    } else if (n == 5) {
        colorValue.innerText = 'Value / ' + col5;
    } else if (n == 6) {
        colorValue.innerText = 'Value / ' + col6;
    }
    c1.addEventListener('click', function () {
        if (n == 1) {
            answer.innerText = 'Answer / Correct';
        }
        else {
            answer.innerText = `Answer / Incorrect / Box ${n}`;
        }
    })
    c2.addEventListener('click', function () {
        if (n == 2) {
            answer.innerText = 'Answer / Correct';
        }
        else {
            answer.innerText = `Answer / Incorrect / Box ${n}`;
        }
    })
    c3.addEventListener('click', function () {
        if (n == 3) {
            answer.innerText = 'Answer / Correct';
        }
        else {
            answer.innerText = `Answer / Incorrect / Box ${n}`;
        }
    })
    c4.addEventListener('click', function () {
        if (n == 4) {
            answer.innerText = 'Answer / Correct';
        }
        else {
            answer.innerText = `Answer / Incorrect / Box ${n}`;
        }
    })
    c5.addEventListener('click', function () {
        if (n == 5) {
            answer.innerText = 'Answer / Correct';
        }
        else {
            answer.innerText = `Answer / Incorrect / Box ${n}`;
        }
    })
    c6.addEventListener('click', function () {
        if (n == 6) {
            answer.innerText = 'Answer / Correct';
        }
        else {
            answer.innerText = `Answer / Incorrect / Box ${n}`;
        }
    })
}

function rgb() {
    answer.innerText = 'Answer /';
    col1 = createRandomRGB();
    c1.style.backgroundColor = col1;
    col2 = createRandomRGB();
    c2.style.backgroundColor = col2;
    col3 = createRandomRGB();
    c3.style.backgroundColor = col3;
    col4 = createRandomRGB();
    c4.style.backgroundColor = col4;
    col5 = createRandomRGB();
    c5.style.backgroundColor = col5;
    col6 = createRandomRGB();
    c6.style.backgroundColor = col6;
    setValue();
}

function hex() {
    answer.innerText = 'Answer /';
    col1 = createRandomHEX();
    c1.style.backgroundColor = col1;
    col2 = createRandomHEX();
    c2.style.backgroundColor = col2;
    col3 = createRandomHEX();
    c3.style.backgroundColor = col3;
    col4 = createRandomHEX();
    c4.style.backgroundColor = col4;
    col5 = createRandomHEX();
    c5.style.backgroundColor = col5;
    col6 = createRandomHEX();
    c6.style.backgroundColor = col6;
    setValue();
}
