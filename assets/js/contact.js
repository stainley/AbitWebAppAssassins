function saveFormContact(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Save form to localStorage
    localStorage.setItem("contact_name", name);
    localStorage.setItem("contact_email", email);
    localStorage.setItem("contact_message", message);

    alert("Form data saved successfully!");

    event.target.reset();
}

const loadFormContactData = (event) => {
    //event.preventDefault();

    const contact_name = localStorage.getItem("contact_name");
    const contact_email = localStorage.getItem("contact_email");
    const contact_message = localStorage.getItem("contact_message");

    const inputName = document.getElementById("name").value;
    const inputEmail = document.getElementById("email").value;
    const inputMessage = document.getElementById("message").value;

    alert(contact_name + "  " + contact_message + "  " + contact_email)

}

countCharacters();
saveFormData()