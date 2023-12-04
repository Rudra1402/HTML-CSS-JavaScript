let comp = document.getElementById("comp");
let user = document.getElementById("user");
let result = document.getElementById("result");
let reset = document.getElementById("reset");
let flash = document.getElementById("flash");
let cross = document.getElementById("cross");
let check = document.getElementById("check");
let compAns = '', userAns = '';
let userScore = 0, compScore = 0;

cross.addEventListener("click", () => {
    flash.style.display = "none";
})
reset.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    flash.style.display = "none";
    comp.setAttribute("src", "./bg1.jpg");
    user.setAttribute("src", "./bg1.jpg");
})
check.addEventListener("click", () => {
    flash.style.display = "grid";
    flash.style.placeItems = "center";
    result.innerHTML = `Ongoing Match!<br><br>Computer - ${compScore}<br>User - ${userScore}`;
})

const roundWinner = (a, b) => {
    if (a === 'Rock') {
        if (b === 'Rock') {
            console.log("Tie");
        } else if (b === 'Paper') {
            userScore += 1;
            console.log("User");
        } else {
            compScore += 1;
            console.log("Computer");
        }
    } else if (a === 'Paper') {
        if (b === 'Paper') {
            console.log("Tie");
        } else if (b === 'Scissor') {
            userScore += 1;
            console.log("User");
        }
        else {
            compScore += 1;
            console.log("Computer");
        }
    } else {
        if (b === 'Scissor') {
            console.log("Tie");
        } else if (b === 'Rock') {
            userScore += 1;
            console.log("User");
        }
        else {
            compScore += 1;
            console.log("Computer");
        }
    }
    if (userScore === 5 || compScore === 5) {
        flash.style.display = "grid";
        flash.style.placeItems = "center";
        if (userScore === 5)
            result.innerHTML = "You have Won the Match!";
        if (compScore === 5)
            result.innerHTML = "Computer has Won the Match!";
    }
}

const compValue = () => {
    let randomNum = Math.ceil(Math.random() * 3)
    if (randomNum === 1) {
        comp.setAttribute("src", "./rock.jpg");
        compAns = 'Rock'
    }
    else if (randomNum === 2) {
        comp.setAttribute("src", "./paper.jpg");
        compAns = 'Paper'
    }
    else {
        comp.setAttribute("src", "./scissor.jpg");
        compAns = 'Scissor'
    }
}

const userValue = (e) => {
    compValue();
    userAns = e.target.innerText;
    user.setAttribute("src", `./${userAns.toLowerCase()}.jpg`);
    roundWinner(compAns, userAns);
}