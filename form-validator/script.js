const form = document.getElementById("form");
const password1E = document.getElementById("password");
const password2E = document.getElementById("password1");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");


let isFormValid = false;
let passwordMatch = false;

function messageStyleGreen(){
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
}

function messageStyleRed(){
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
    console.log(user)
}


function formValidation() {
    isFormValid = form.checkValidity();
    console.log(isFormValid)

    if (!isFormValid){
        message.innerText = "Please fill out the fields correctly"
        messageStyleRed();
        return;
    }

    if (password1E.value === password2E.value && isFormValid){
        passwordMatch = true;
        password1E.style.borderColor = 'green';
        password2E.style.borderColor = 'green';
        message.innerText = "Sail High Seas My Friend!"
        messageStyleGreen();
    }
    else{
        passwordMatch = false;
        password1E.style.borderColor = 'red';
        password2E.style.borderColor = 'red';
        message.innerText = 'Make Sure The Passwords Match'
        messageStyleRed();  
    }
}

function processFormDate(e) {
    e.preventDefault();
    formValidation();
    if (isFormValid && passwordMatch) {
        storeFormData();
    }
}

form.addEventListener('submit', processFormDate)