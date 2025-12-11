function checkStrength() {
    // 1. Get the HTML elements
    const passwordInput = document.getElementById("passwordInput");
    const messageBox = document.getElementById("message");

    // 2. Get the actual text typed by the user
    const password = passwordInput.value;

    // 3. Define the special characters
    const specialChars = "!@#$%^&*";
    
    // 4. Initialize flags
    let hasNumber = false;
    let hasSpecial = false;

    // 5. Loop through the password
    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        // Check for number
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }

        // Check for special character
        if (specialChars.includes(char)) {
            hasSpecial = true;
        }
    }

    // 6. Logic & Update the HTML
    if (password.length < 8) {
        messageBox.innerText = "Weak (Too short)";
        messageBox.style.color = "red";
    } 
    else if (hasNumber && hasSpecial) {
        messageBox.innerText = "Strong!";
        messageBox.style.color = "green";
    } 
    else {
        messageBox.innerText = "Medium (Add number or symbol)";
        messageBox.style.color = "orange";
    }
}
