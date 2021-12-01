const myImage = document.querySelector('img');

myImage.onclick = function () {
    let miSrc = myImage.getAttribute('src');
    if(miSrc === 'images/swimming-how-to.jpg.crdownload') {
        myImage.setAttribute('src', 'images/shark.jpg');
    } else {
        myImage.setAttribute('src', 'images/swimming-how-to.jpg.crdownload')
    }
}

let mybutton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if(!myName){
        setUserName();
    }else {
        localStorage.getItem('name', myName);
        myHeading.innerHTML = 'welcome ' + myName;
    }

}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome ' + storedName;
}

mybutton.onclick = function() {
    setUserName();
}