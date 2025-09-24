let email = document.querySelector("#loginEmail");
let password = document.querySelector("#loginPassword");
let loginbtn = document.querySelector("#login");
let error = document.querySelector("#error");

let emailError = document.querySelector("#emailerorr"); 
let passwordError = document.querySelector("#passworderorr"); 

loginbtn.addEventListener("click", function(e) {
    e.preventDefault(); 

    let valid = true;

    emailError.textContent = "";
    passwordError.textContent = "";
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
        passwordError.textContent = texts[currentLang].messages.passwordRequired;;
         passwordError.style.display = "block";
        valid = false;
    } else if(password.value.length < 6) {
        passwordError.textContent = texts[currentLang].messages.passwordMin;
         passwordError.style.display = "block";
        valid = false;
    }

    if(!valid) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userFound = users.find(u => u.email === email.value && u.password === password.value);

    if(userFound) {
         sessionStorage.setItem("currentUser", JSON.stringify(userFound));
        let successMessage = document.querySelector("#successMessage");
       successMessage.style.display = "block";
       setTimeout(() => {
         window.location.href = "index.html";
       }, 2000);
    } else {
       let nonregister = document.querySelector("#notregister");
  
    nonregister.style.display = "block";
    }
});
