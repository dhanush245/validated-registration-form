document.getElementById('regForm').onsubmit = function (e) {
    e.preventDefault();
    let valid = true;

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;

    const firstName = document.getElementById('firstName').value.trim();
    if (!firstName) {
        document.getElementById('firstNameError').innerText = "First Name is required";
        valid = false;
    } else if (!nameRegex.test(firstName)) {
        document.getElementById('firstNameError').innerText = "Letters only";
        valid = false;
    } else {
        document.getElementById('firstNameError').innerText = "";
    }

    const lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        document.getElementById('lastNameError').innerText = "Last Name is required";
        valid = false;
    } else if (!nameRegex.test(lastName)) {
        document.getElementById('lastNameError').innerText = "Letters only";
        valid = false;
    } else {
        document.getElementById('lastNameError').innerText = "";
    }

    const userName = document.getElementById('userName').value.trim();
    if (!userName) {
        document.getElementById('userNameError').innerText = "User Name is required";
        valid = false;
    } else {
        document.getElementById('userNameError').innerText = "";
    }

    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('passwordError').innerText = "Password is required";
        valid = false;
    } else {
        document.getElementById('passwordError').innerText = "";
    }

    const email = document.getElementById('email').value.trim();
    if (!email) {
        document.getElementById('emailError').innerText = "Email is required";
        valid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = "Invalid email format";
        valid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    const phone = document.getElementById('phone').value.trim();
    if (!phone) {
        document.getElementById('phoneError').innerText = "Phone number is required";
        valid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = "Enter a 10-digit number";
        valid = false;
    } else {
        document.getElementById('phoneError').innerText = "";
    }

    const genders = document.getElementsByName('gender');
    let genderChecked = false;
    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            genderChecked = true;
            break;
        }
    }
    if (!genderChecked) {
        document.getElementById('genderError').innerText = "Select gender";
        valid = false;
    } else {
        document.getElementById('genderError').innerText = "";
    }

    const city = document.getElementById('city').value.trim();
    if (!city) {
        document.getElementById('cityError').innerText = "City is required";
        valid = false;
    } else {
        document.getElementById('cityError').innerText = "";
    }

    const state = document.getElementById('state').value.trim();
    if (!state) {
        document.getElementById('stateError').innerText = "State is required";
        valid = false;
    } else {
        document.getElementById('stateError').innerText = "";
    }

    const dob = document.getElementById('dob').value.trim();
    if (!dob) {
        document.getElementById('dobError').innerText = "Date of Birth is required";
        valid = false;
    } else {
        document.getElementById('dobError').innerText = "";
    }

    const address = document.getElementById('address').value.trim();
    if (!address) {
        document.getElementById('addressError').innerText = "Address is required";
        valid = false;
    } else {
        document.getElementById('addressError').innerText = "";
    }

    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').innerText = "You must agree to terms";
        valid = false;
    } else {
        document.getElementById('termsError').innerText = "";
    }


    if (valid) {
        alert("Form submitted successfully!");
    }

};
