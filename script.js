document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();


    let familInput = document.getElementById("famil");
    if (checkValidity(familInput)) {
        showValid(familInput);
    } else {
        showError(familInput);
    }

    let nameInput = document.getElementById("name");
    if (checkValidity(nameInput)) {
        showValid(nameInput);
    } else {
        showError(nameInput);
    }

    let otchestvoInput = document.getElementById("otchestvo");
    if (checkValidity(otchestvoInput)) {
        showValid(otchestvoInput);
    } else {
        showError(otchestvoInput);
    }

    let phoneInput = document.getElementById("phone");
    if (checkValidity(phoneInput)) {
        showValid(phoneInput);
    } else {
        showError(phoneInput);
    }

    let emailInput = document.getElementById("email");
    if (checkValidity(emailInput)) {
        showValid(emailInput);
    } else {
        showError(emailInput);
    }
});

function checkValidity(content) {
    var cnt = content
    var value = cnt.value;

    if (value == 0) {
        return false;
    } else {
        return true;
    }
}

function showError(element) {
    element.classList.add("error");
}

function showValid(element) {
    element.classList.add("valid");
}


function resetStyles() {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error");
        inputs[i].classList.remove("valid");
    }
}
