import form from "./register.mjs";

document.getElementById("add").addEventListener("click", () => {
    const newCount = form.incrementCount();
    form.participantTemplate(newCount);
})

document.getElementById("submitButton").addEventListener("click", (event) => {
    form.submitForm(event);
})