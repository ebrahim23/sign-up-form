let form = document.getElementById("form"),
    fName = document.getElementById("fName"),
    lName = document.getElementById("lName"),
    email = document.getElementById('email'),
    password = document.getElementById("password");


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkIf();
});

function checkIf(){
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();
    const emailValue = email.value.trim();
    const passValue = password.value.trim();

    if(fNameValue === ''){
        setError(fName, 'First Name cannot be empty');
    } else{
        setSuccess(fName);
    };
    if(lNameValue === ''){
        setError(lName, 'Last Name cannot be empty');
    } else{
        setSuccess(lName);
    };

    if(emailValue === ''){
        setError(email, 'Looks like this is not an email');
    } else if(!isEmail(emailValue)) {
        setError(email, 'Type a valid email!')
    } else {
        setSuccess(email);
    }

    if(passValue === ''){
        setError(password, 'Password cannot be empty');
    } else{
        setSuccess(password);
    };
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'f-control error';
}

function setSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'f-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}