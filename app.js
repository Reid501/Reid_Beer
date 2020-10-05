firstName = document.getElementById('first-name');
lastName = document.getElementById('last-name');
email = document.getElementById('email');
button = document.getElementById('button');
firstNameError = document.querySelector('.firstNameError');
lastNameError = document.querySelector('.lastNameError');
emailNameError = document.querySelector('.emailNameError');
form = document.querySelector('.subscribe-form');
message = document.querySelector('.completed-message');
errorMessages = ['Please Enter Your First Name', 'Please Enter Your Last Name', 'Please Enter A Valid Email'];

let stepOne = false;
let stepTwo = false;
let stepThree = false;

button.addEventListener('click', () =>{
    if(firstName.value != '' || null){
        firstName.style.border = '2px solid green';
        firstNameError.innerHTML = '';
        stepOne = true;
    } else if(firstName.value === '' || null) {
        console.log('test');
        firstNameError.innerHTML = errorMessages[0];
        firstName.style.border = '2px solid red'
        stepOne = false;
    } 
    if(lastName.value != '' || null){
        lastName.style.border = '2px solid green';
        lastNameError.innerHTML = '';
        stepTwo = true;
    }else if(lastName.value === '' || null) {
        lastNameError.innerHTML = errorMessages[1];
        lastName.style.border = '2px solid red'
        stepTwo = false;
    }
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
        email.style.border = '2px solid green';
        emailNameError.innerHTML = ''
        stepThree = true;
    } else {
        emailNameError.innerHTML = errorMessages[2];
        email.style.border = '2px solid red';
        stepThree = false;
    }

    if (stepOne && stepTwo && stepThree === true){
        form.style.display = 'none';
        message.style.display = 'flex';
    }
})
