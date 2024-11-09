import form from "register.mjs";

document.getElementById("add").addEventListener("click", function() {
    count++
    participantTemplate(count);
})

document.getElementById("submitButton").addEventListener("click", function() {
    form.submitForm(event);
})