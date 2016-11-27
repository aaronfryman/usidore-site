var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc == 'images/wizard.jpg') {
		myImage.setAttribute ('src', 'images/other-blue-wizard.jpg');
	} else {
		myImage.setAttribute ('src', 'images/wizard.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Usidore loves birds, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Usidore loves birds, ' + storedName;
}

myButton.onclick = function () {
	setUserName();
}
