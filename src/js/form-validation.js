const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");

const retornButton = document.querySelector("#btn-2");

const signUpForm = document.querySelector(".sign-up-form");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (emailInput.value === "" || !iseMailValid(emailInput.value)) {
        return alert("aaaaaaaa")
    }
    
    form.submit();
})

function iseMailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        //    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,14}$/
    );

    if (emailRegex.test(email)) return true;
    

    return false;
}