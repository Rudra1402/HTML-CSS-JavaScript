let startPage = document.getElementById('startPage');
let start = document.getElementById('start');
let quesPage = document.getElementById('questionPage');
let ques = document.getElementById('ques');
let resultPage = document.getElementById('resultPage');
let quizOver = document.getElementById('quizOver');
let score = document.getElementById('score');
let submit = document.getElementById('sub');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');
let ans4 = document.getElementById('ans4');
let green = document.getElementById('green');
let red = document.getElementById('red');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');

let quizObj = [
    {
        q: 'What will be the output for : printf("%d", a++)?',
        a: ['a', 'a+1', 'a+2', 'GarbageValue'],
        c: 0
    },
    {
        q: 'How many times the for loop will iterate : for(i = 0; i < 10; i--)?',
        a: ['0', '10', '9', 'Infinite'],
        c: 3
    },
    {
        q: 'Which header file is required for std::setprecision() function in C++?',
        a: ['iomanip.h', 'string.h', 'ctype.h', 'math.h'],
        c: 0
    },
    {
        q: 'How many keywords are there in C Language?',
        a: ['35', '33', '32', '34'],
        c: 2
    },
    {
        q: 'What is the full form of SQL?',
        a: ['Structured Queue Language', 'Sample Query Language', 'Structure Queue Language', 'Structured Query Language'],
        c: 3
    },
    {
        q: 'Which of the following is not a valid JavaScript variable?',
        a: ['1name', '_name', 'name', 'None of the above'],
        c: 0
    },
    {
        q: 'What is the correct JavaScript syntax to write "Hello World"?',
        a: ['display("Hello World")', 'print("Hello World")', 'document.write("Hello World")', 'response.write("Hello World")'],
        c: 2
    },
    {
        q: 'x = 4 + "4"; console.log(x); OUTPUT?',
        a: ['8', '44', '4', 'None of the above'],
        c: 1
    },
    {
        q: 'x = 2+5+"3", y = 2+"5"+3; console.log(x, y); OUTPUT?',
        a: ['10 10', '8 10', '253 253', '73 253'],
        c: 3
    },
    {
        q: 'What does console.log(navigator.userAgent) display?',
        a: ['App Name', 'App Code Name', 'App Version', 'All of the above'],
        c: 3
    }
];

quesPage.style.display = 'none';
resultPage.style.display = 'none';

let i = 0;

function loadQuestion() {
    ques.innerHTML = 'Q'+(i+1)+'. '+quizObj[i].q;
    ans1.innerHTML = quizObj[i].a[0];
    ans2.innerHTML = quizObj[i].a[1];
    ans3.innerHTML = quizObj[i].a[2];
    ans4.innerHTML = quizObj[i].a[3];
}

let userScore = 0;
let falseAns = 0;
loadQuestion();

start.addEventListener('click', () => {
    startPage.style.display = 'none';
    quesPage.style.display = 'flex';
    quesPage.style.flexDirection = 'column';
    quesPage.style.justifyContent = 'center';
    quesPage.style.alignItems = 'center';
    submit.addEventListener('click', () => {
        let joddAns = quizObj[i].c, index = 0, checkedAns = false;
        i++;
        let radioList = document.getElementsByTagName('input');
        for (let z = 0; z < radioList.length; z++) {
            if (radioList[z].checked == true) {
                index = z;
                checkedAns = true;
                radioList[z].checked = false;
            }
        }
        if (index == joddAns && checkedAns) {
            userScore++;
            green.style.width = userScore*10+'%';
            n1.innerText = userScore + ' / 10';
        } else {
            falseAns++;
            red.style.width = falseAns*10+'%';
            n2.innerText = falseAns + ' / 10';
        }
        if (i == 10) {
            quesPage.style.display = 'none';
            resultPage.style.display = 'flex';
            resultPage.style.flexDirection = 'column';
            resultPage.style.justifyContent = 'center';
            resultPage.style.alignItems = 'center';
            quizOver.innerHTML = 'Quiz is Over!';
            score.innerHTML = 'You answered ' + userScore + '/10 answers correctly!';
            return;
        }
        loadQuestion();
    })
});