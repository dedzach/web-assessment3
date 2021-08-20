console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('click', () => {
	alert("Your response has been recorded!");
});

let img = document.querySelector('img src')
img.addEventListener.querySelector('mouseover', () => {
	alert('You are very wise!');
});