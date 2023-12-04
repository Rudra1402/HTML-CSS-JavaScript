let count = 0;
let flash = document.getElementById('flash');
let result = document.getElementById('result');
let cross = document.getElementById('cross');
let reset = document.getElementById('reset');
let check = document.getElementById('check');
let dark = document.getElementById('dark');
let cells = document.getElementsByClassName('cell');
let e1, e2, e3, e4, e5, e6, e7, e8, e9;
let darkStatus = true;

dark.addEventListener('click', () => {
    if (darkStatus) {
        document.body.style.backgroundColor = 'white';
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.borderColor = 'black';
            cells[i].style.color = 'black';
        }
        darkStatus = false;
        dark.innerText = 'Enable Dark Mode';
    } else {
        document.body.style.backgroundColor = '#212529';
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.borderColor = 'white';
            cells[i].style.color = 'white';
        }
        darkStatus = true;
        dark.innerText = 'Enable Light Mode';
    }
})

cross.addEventListener('click', () => {
    flash.style.display = 'none';
})
reset.addEventListener('click', () => {
    flash.style.display = 'none';
    clearTable();
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'transparent';
    }
    count = 0;
    result.innerHTML = 'Complete the match to see the Results!';
})
check.addEventListener('click', () => {
    flash.style.display = 'grid';
    flash.style.placeItems = 'center';
})

const clearTable = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }
}

function checkTrio() {

    e1 = cells[0];
    e2 = cells[1];
    e3 = cells[2];
    e4 = cells[3];
    e5 = cells[4];
    e6 = cells[5];
    e7 = cells[6];
    e8 = cells[7];
    e9 = cells[8];

    if ((e1.innerHTML == e2.innerHTML) && (e2.innerHTML == e3.innerHTML) && (e3.innerHTML != '')) {
        if (e1.innerHTML == 'X')
            result.innerHTML = 'Player X is the Winner!';
        else
            result.innerHTML = 'Player O is the Winner!';
        e1.style.backgroundColor = '#1df5df70';
        e2.style.backgroundColor = '#1df5df70';
        e3.style.backgroundColor = '#1df5df70';
        setTimeout(() => {
            flash.style.display = 'grid';
            flash.style.placeItems = 'center';
        }, 1000);
    } else if ((e1.innerHTML == e4.innerHTML) && (e4.innerHTML == e7.innerHTML) && (e7.innerHTML != '')) {
        if (e1.innerHTML == 'X')
            result.innerHTML = 'Player X is the Winner!';
        else
            result.innerHTML = 'Player O is the Winner!';
        e1.style.backgroundColor = '#1df5df70';
        e4.style.backgroundColor = '#1df5df70';
        e7.style.backgroundColor = '#1df5df70';
        setTimeout(() => {
            flash.style.display = 'grid';
            flash.style.placeItems = 'center';
        }, 1000);
    } else if ((e1.innerHTML == e5.innerHTML) && (e5.innerHTML == e9.innerHTML) && (e9.innerHTML != '')) {
        if (e1.innerHTML == 'X')
            result.innerHTML = 'Player X is the Winner!';
        else
            result.innerHTML = 'Player O is the Winner!';
        e1.style.backgroundColor = '#1df5df70';
        e5.style.backgroundColor = '#1df5df70';
        e9.style.backgroundColor = '#1df5df70';
        setTimeout(() => {
            flash.style.display = 'grid';
            flash.style.placeItems = 'center';
        }, 1000);
    } else if ((e2.innerHTML == e5.innerHTML) && (e5.innerHTML == e8.innerHTML) && (e8.innerHTML != '')) {
        if (e2.innerHTML == 'X')
            result.innerHTML = 'Player X is the Winner!'
        else
            result.innerHTML = 'Player O is the Winner!'
        e2.style.backgroundColor = '#1df5df70';
        e5.style.backgroundColor = '#1df5df70';
        e8.style.backgroundColor = '#1df5df70';
        setTimeout(() => {
            flash.style.display = 'grid';
            flash.style.placeItems = 'center';
        }, 1000);
    } else if ((e3.innerHTML == e6.innerHTML) && (e6.innerHTML == e9.innerHTML) && (e9.innerHTML != '')) {
        if (e3.innerHTML == 'X')
            result.innerHTML = 'Player X is the Winner!'
        else
            result.innerHTML = 'Player O is the Winner!'
        e3.style.backgroundColor = '#1df5df70';
        e6.style.backgroundColor = '#1df5df70';
        e9.style.backgroundColor = '#1df5df70';
        setTimeout(() => {
            flash.style.display = 'grid';
            flash.style.placeItems = 'center';
        }, 1000);
    } else if ((e4.innerHTML == e5.innerHTML) && (e5.innerHTML == e6.innerHTML) && (e6.innerHTML != '')) {
        if (e4.innerHTML == 'X')
            result.innerHTML = 'Player X is the Winner!'
        else
            result.innerHTML = 'Player O is the Winner!'
        e4.style.backgroundColor = '#1df5df70';
        e5.style.backgroundColor = '#1df5df70';
        e6.style.backgroundColor = '#1df5df70';
        setTimeout(() => {
            flash.style.display = 'grid';
            flash.style.placeItems = 'center';
        }, 1000);
    } else if ((e7.innerHTML == e8.innerHTML) && (e8.innerHTML == e9.innerHTML) && (e9.innerHTML != '')) {
        if (e7.innerHTML == 'X')
            result.innerHTML = 'Player X is the Winner!'
        else
            result.innerHTML = 'Player O is the Winner!'
        e7.style.backgroundColor = '#1df5df70';
        e8.style.backgroundColor = '#1df5df70';
        e9.style.backgroundColor = '#1df5df70';
        setTimeout(() => {
            flash.style.display = 'grid';
            flash.style.placeItems = 'center';
        }, 1000);
    } else if ((e3.innerHTML == e5.innerHTML) && (e5.innerHTML == e7.innerHTML) && (e7.innerHTML != '')) {
        if (e3.innerHTML == 'X')
            result.innerHTML = 'Player X is the Winner!'
        else
            result.innerHTML = 'Player O is the Winner!'
        e3.style.backgroundColor = '#1df5df70';
        e5.style.backgroundColor = '#1df5df70';
        e7.style.backgroundColor = '#1df5df70';
        setTimeout(() => {
            flash.style.display = 'grid';
            flash.style.placeItems = 'center';
        }, 1000);
    }
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
        if (result.innerHTML == 'Draw!' || result.innerHTML == 'Player X is the Winner!' || result.innerHTML == 'Player O is the Winner!' || result.innerHTML == 'Reset the match to Play More!') {
            flash.style.display = 'grid';
            flash.style.placeItems = 'center';
            result.innerHTML = 'Reset the match to Play More!';
        }
        else if (cells[i].innerHTML == '') {
            if (count % 2 == 0)
                cells[i].innerText = "X";
            else
                cells[i].innerText = "O";
            if (count >= 4) {
                if (count == 8) {
                    flash.style.display = 'grid';
                    flash.style.placeItems = 'center';
                    result.innerHTML = 'Draw!';
                }
                checkTrio();
            }
            count++;
        }
    })
}