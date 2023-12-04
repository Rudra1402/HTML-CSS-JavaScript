let colorTitle = document.getElementById("colorTitle");
let baseColor = document.getElementById("baseColor");
let alterColor = document.getElementById("alterColor");
let myHex = document.getElementById("myHex");
let myOpacity = document.getElementById("opVal");
let myRange = document.getElementById("range");
let submit = document.getElementById("sub");
let rgb = document.getElementById("rgb");
let rgba = document.getElementById("rgba");
let myStr = '';

// Jabukiya lighting
setInterval(() => {
    let r1 = Math.random() * 255;
    let r2 = Math.random() * 255;
    let r3 = Math.random() * 255;
    colorTitle.style.color = `rgb(${r1},${r2},${r3})`;
}, 250);

// Setting the byDefault value of Range as 100%
myOpacity.innerText = '100%';
myRange.value = 100;

// Disabling the range until a HEX Value is inputted
myRange.disabled = true;

// Function which converts HEX Color to its equivalent RGB Color
function hexToRGB(hexStr) {
    let r, g, b, h3D = '';
    if (hexStr.length == 6) {
        r = parseInt(("0" + hexStr.substring(0, 2)).slice(-2), 16);
        g = parseInt(("0" + hexStr.substring(2, 4)).slice(-2), 16);
        b = parseInt(("0" + hexStr.substring(4, 6)).slice(-2), 16);
    } else {
        h3D += hexStr[0] + hexStr[0] + hexStr[1] + hexStr[1] + hexStr[2] + hexStr[2];
        r = parseInt(("0" + h3D.substring(0, 2)).slice(-2), 16);
        g = parseInt(("0" + h3D.substring(2, 4)).slice(-2), 16);
        b = parseInt(("0" + h3D.substring(4, 6)).slice(-2), 16);
    }
    let rgbStr = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return rgbStr;
}

// Function that checks whether the HEX input is valid or not
function checkValidInput(myHexValue) {
    let myRegex6 = /^#?[0-9a-fA-F]{6}$/;
    let myRegex3 = /^#?[0-9a-fA-F]{3}$/;
    if (myRegex3.test(myHexValue) || myRegex6.test(myHexValue))
        return true;
    return false;
}

// onClick Function
submit.addEventListener('click', () => {
    let tempHexVal = myHex.value;
    if (checkValidInput(tempHexVal)) {
        if (tempHexVal[0] == '#') {
            baseColor.style.backgroundColor = tempHexVal;
            alterColor.style.backgroundColor = tempHexVal;
            myStr = (myHex.value).substring(1, (myHex.value).length);
        } else {
            baseColor.style.backgroundColor = '#' + tempHexVal;
            alterColor.style.backgroundColor = '#' + tempHexVal;
            myStr = tempHexVal;
        }
        myRange.disabled = false;
        myRange.value = 100;
        myOpacity.innerText = '100%';
        let hexToRgbReturn = hexToRGB(myStr);
        rgb.innerHTML = hexToRgbReturn;
        rgba.innerHTML = 'rgba' + hexToRgbReturn.substring(3, hexToRgbReturn.length-1) + ', 1.00)';
    }
    myHex.value = "";
})

// Function that changes Opacity when range value changes
function getInput() {
    let a = myRange.value;
    myOpacity.innerText = a + '%';
    a = (a / 100).toFixed(2);
    let rgbaStr = hexToRGB(myStr);
    rgbaStr = 'rgba' + rgbaStr.substring(3, rgbaStr.length - 1) + ', ' + a + ')';
    rgba.innerHTML = rgbaStr;
    alterColor.style.backgroundColor = rgbaStr;
}