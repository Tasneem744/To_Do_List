
const texts = {
    en: {
        placeholders: {
            firstName: "First Name",
            lastName: "Last Name",
            emailRegister: "Email",
            passwordRegister: "Password",
            emailLogin: "Email",
            passwordLogin: "Password",
            addTask: "Add Your Task",
        },
        buttons: {
            register: "Register",
            login: "Login",
            addTask: "Add",
            logout: "Logout",
            langBtn: "ع",
            delBtn: "Delete", 
            doneBtn: "Done"
        },
        messages: {
            login:"login",
            successRegister: "User registered successfully!",
            successLogin: "Login successful!",
            notRegistered: "Email or password is incorrect",
            emailExists: "This email is already registered!",
            h2todo:"Get Things Done",
            celebrate:"🎉 Congrats! All tasks are done! 🎉",
            welcom:"Welcome! Create Your Account",


            firstNameRequired: "First name is required!",
            firstNameMin: "First name must be at least 3 characters!",
            lastNameRequired: "Last name is required!",
            lastNameMin: "Last name must be at least 3 characters!",
            emailRequired: "Email is required!",
            emailInvalid: "Please enter a valid email!",
            passwordRequired: "Password is required!",
            passwordMin: "Password must be at least 6 characters!"
            
        },
        links: {
            goToRegister: "Don't have an account? Register here",
            goToLogin: "Already have an account? Login"
        }
    },
    ar: {
        placeholders: {
            firstName: "الاسم الأول",
            lastName: "اسم العائلة",
            emailRegister: "البريد الإلكتروني",
            passwordRegister: "كلمة المرور",
            emailLogin: "البريد الإلكتروني",
            passwordLogin: "كلمة المرور",
            addTask: "أضف مهمتك",
            
            
        },
        buttons: {
            register: "تسجيل",
            login: "تسجيل الدخول",
            addTask: "أضف",
            logout: "تسجيل الخروج",
            langBtn: "EN",
            delBtn:"حذف",
            doneBtn:"تم"
        },
        messages: {
            login:"تسجيل الدخول" ,
            successRegister: "تم تسجيل المستخدم بنجاح!",
            successLogin: "تم تسجيل الدخول بنجاح!",
            notRegistered: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
            emailExists: "هذا البريد مسجل مسبقاً!",
            h2todo:"أنجزها الآن" ,
            celebrate:"🎉 مبروك! كل المهام خلصت! 🎉",
            welcom:"مرحباً! سجّل حسابك الآن",

            firstNameRequired: "الاسم الأول مطلوب!",
            firstNameMin: "الاسم الأول يجب أن يكون 3 أحرف على الأقل!",
            lastNameRequired: "اسم العائلة مطلوب!",
            lastNameMin: "اسم العائلة يجب أن يكون 3 أحرف على الأقل!",
            emailRequired: "البريد الإلكتروني مطلوب!",
            emailInvalid: "الرجاء إدخال بريد إلكتروني صالح!",
            passwordRequired: "كلمة المرور مطلوبة!",
            passwordMin: "كلمة المرور يجب أن تكون 6 أحرف على الأقل!"

        },
        links: {
            goToRegister: " ليس لديك حساب؟  سجل هنا",
            goToLogin: "لديك حساب؟  سجل الدخول"   
        }
    }
};

const langBtn = document.querySelector("#langBtn");
let currentLang = localStorage.getItem("lang") || "en"; 

applyLanguage(currentLang);


langBtn.addEventListener("click", function() {
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("lang", currentLang);
    applyLanguage(currentLang);
});

     function applyLanguage(lang) {
    const textsToUse = texts[lang];
  
    // Placeholders
    const firstName = document.querySelector("#firstName");
    if (firstName) firstName.setAttribute("placeholder", textsToUse.placeholders.firstName);

    const lastName = document.querySelector("#lastName");
    if (lastName) lastName.setAttribute("placeholder", textsToUse.placeholders.lastName);

    const registerEmail = document.querySelector("#registerEmail");
    if (registerEmail) registerEmail.setAttribute("placeholder", textsToUse.placeholders.emailRegister);

    const registerPassword = document.querySelector("#registerPassword");
    if (registerPassword) registerPassword.setAttribute("placeholder", textsToUse.placeholders.passwordRegister);

    const loginEmail = document.querySelector("#loginEmail");
    if (loginEmail) loginEmail.setAttribute("placeholder", textsToUse.placeholders.emailLogin);

    const loginPassword = document.querySelector("#loginPassword");
    if (loginPassword) loginPassword.setAttribute("placeholder", textsToUse.placeholders.passwordLogin);

    const textinput = document.querySelector("#textinput");
    if (textinput) textinput.setAttribute("placeholder", textsToUse.placeholders.addTask);

    
   const delBtns = document.querySelectorAll(".delete");
  delBtns.forEach(btn => btn.textContent = textsToUse.buttons.delBtn);
  
  const doneBtns = document.querySelectorAll(".done");
  doneBtns.forEach(btn => btn.textContent = textsToUse.buttons.doneBtn);
  
    
    const registerBtn = document.querySelector("button[type='submit']");
    if (registerBtn) registerBtn.textContent = textsToUse.buttons.register || textsToUse.buttons.login;

    const addTaskBtn = document.querySelector("#addTask");
    if (addTaskBtn) addTaskBtn.textContent = textsToUse.buttons.addTask;

    const logoutBtn = document.querySelector("#logoutBtn");
    if (logoutBtn) logoutBtn.textContent = textsToUse.buttons.logout;
    

    if (langBtn) langBtn.textContent = textsToUse.buttons.langBtn;

    // Messages
     const h2todo = document.querySelector(".todo");
    if (h2todo) h2todo.textContent = textsToUse.messages.h2todo ;


    const firstNameRequired = document.querySelector("#firstNameError");
    if (firstNameRequired) firstNameRequired.textContent = textsToUse.messages.firstNameRequired ;
    const welcom = document.querySelector(".welcome");
    if (welcom) welcom.textContent = textsToUse.messages.welcom ;


    const successMessage = document.querySelector("#successMessage");
    if (successMessage) successMessage.textContent = textsToUse.messages.successRegister || textsToUse.messages.successLogin;
    const login = document.querySelector(".login");
    if (login) login.textContent = textsToUse.messages.login || textsToUse.messages.login

    const notregister = document.querySelector("#notregister");
    if (notregister) notregister.textContent = textsToUse.messages.notRegistered;

    // Links
    const goToRegister = document.querySelector("a[href='register.html']");
    if (goToRegister) goToRegister.textContent = textsToUse.links.goToRegister;

    const goToLogin = document.querySelector("a[href='login.html']");
    if (goToLogin) goToLogin.textContent = textsToUse.links.goToLogin;

    if (logoutBtn&&addTaskBtn) {
    if (currentLang === "ar") {
         logoutBtn.style.width ="110px";
         addTaskBtn.style.width ="110px";
         }}
        
document.body.dir = lang === "ar" ? "rtl" : "ltr";
 
}


