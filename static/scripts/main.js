let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/RalXYZ.jpg') {
        myImage.setAttribute('src', 'images/RalXYZ-red.jpg');
    } 
    else if (mySrc === 'images/RalXYZ-red.jpg') {
        myImage.setAttribute('src', 'images/RalXYZ.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    if (!myName || myName === null) {
        myHeading.textContent = 'Cat';
    }
    else {
        myHeading.textContent = myName + ' Cat';
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    if (!storedName || storedName === null  || storedName === 'null') {
        myHeading.textContent = 'Cat';
    }
    else {
        myHeading.textContent = storedName + ' Cat';
    }
}

myButton.onclick = function() {
    setUserName();
}