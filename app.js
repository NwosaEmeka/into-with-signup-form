const form = document.querySelector('.form-group');
const firstName = document.querySelector('#FirstName');
const lastName = document.querySelector('#LastName');
const email = document.querySelector('#Email');
const password = document.querySelector('#Password');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkinput();
});

function checkinput() {
	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	// Check if first name is empty
	if (firstNameValue === '') {
		setErrorFor(firstName, 'First name cannot be empty');
	} else {
		setSuccessFor(firstName);
	}

	// Check if last name is empty
	if (lastNameValue === '') {
		setErrorFor(lastName, 'Last name cannot be empty');
	} else {
		setSuccessFor(lastName);
	}

	//Check if email is empty
	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be empty');
		//Check valid email using regex
	} else if (!isValidEmail(emailValue)) {
		setErrorFor(email, 'Look like this is not an email');
	} else {
		setSuccessFor(email);
	}

	// check if password is empty
	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	} else {
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formItem = input.parentElement;
	const small = formItem.querySelector('small');

	formItem.className = 'form-item error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formItem = input.parentElement;

	formItem.className = 'form-item success';
}

function isValidEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(email);
}
