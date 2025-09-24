
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#registerEmail");
const password = document.querySelector("#registerPassword");
const registerBtn = document.querySelector("button[type='submit']");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const successMessage = document.querySelector("#successMessage");

registerBtn.addEventListener("click", function(e) {
    e.preventDefault();

    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.style.display = "none";

    let valid = true;
    

    if(firstName.value === "") {

        firstNameError.textContent = texts[currentLang].messages.firstNameRequired;
        firstNameError.style.display = "block";
        valid = false;
    } else if(firstName.value.length < 3) {
        firstNameError.textContent = texts[currentLang].messages.firstNameMin;
        firstNameError.style.display = "block";
        valid = false;
    }

    if(lastName.value === "") {
        lastNameError.textContent = texts[currentLang].messages.lastNameRequired;
         lastNameError.style.display = "block";
        valid = false;
    } else if(lastName.value.length < 3) {
        lastNameError.textContent = texts[currentLang].messages.lastNameMin;
         lastNameError.style.display = "block";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value === "") {
        emailError.textContent = texts[currentLang].messages.emailRequired;
         emailError.style.display = "block";
        valid = false;
    } else if(!emailPattern.test(email.value)) {
        emailError.textContent = texts[currentLang].messages.emailInvalid;
        emailError.style.display = "block";
        valid = false;
    }

    if(password.value === "") {
        passwordError.textContent = texts[currentLang].messages.passwordRequired;
        passwordError.style.display = "block";
        valid = false;
    } else if(password.value.length < 6) {
        passwordError.textContent = texts[currentLang].messages.passwordMin;
         passwordError.style.display = "block";
        valid = false;
    }

    if(!valid) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if(users.some(u => u.email === email.value)) {
        emailError.textContent = texts[currentLang].messages.emailExists;
        emailError.style.display = "block";
        return;
    }

    users.push({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    });

    localStorage.setItem("users", JSON.stringify(users));

    successMessage.textContent = texts[currentLang].messages.successRegister;
    successMessage.style.display = "block";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});
