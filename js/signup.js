function countCharacters() {
    const message = document.getElementById("name");
    const charCount = document.getElementById("charCount");
    message.addEventListener("input", () => {
        charCount.innerHTML = message.value.length;
    });
}


function saveFormData(event) {
    event.preventDefault();

    // Get form data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Password is different!")
        return;
    }

    // Save form to localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Form data saved successfully!");

    event.target.reset();
}

const loadFormData = (event) => {
    //event.preventDefault();

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    const inputEmail = document.getElementById("email").value;
    const inputPassword = document.getElementById("password").value;

    if (inputEmail === email && password === inputPassword) {
        alert("Authentication successfully");
    } else {
        alert("Email/Password invalid!")
    }
}

countCharacters();
saveFormData()