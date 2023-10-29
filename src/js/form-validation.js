const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");

const signUpForm = document.querySelector(".sign-up-form");
const successMessage = document.querySelector(".success-message");

const retornButton = document.querySelector("#btn-2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (emailInput.value === "" || !iseMailValid(emailInput.value)) return form.classList.add("invalid")

    successMessage.classList.remove("disable")
    signUpForm.classList.add("disable")

    retornButton.addEventListener("click", () => {
        signUpForm.classList.remove("disable");
        successMessage.classList.add("disable");
        form.submit();
    })
})

function iseMailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) return true;

    return false;
}