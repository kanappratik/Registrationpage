function validateForm() {
    // Get values from form
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    let errorMessages = "";

    // Validate Full Name
    if (fullName.trim() === "") {
        errorMessages += "Full name is required.<br>";
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessages += "Please enter a valid email address.<br>";
    }

    // Validate Password
    if (password.length < 6) {
        errorMessages += "Password must be at least 6 characters long.<br>";
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        errorMessages += "Passwords do not match.<br>";
    }

    // Validate Terms and Conditions
    if (!terms) {
        errorMessages += "You must agree to the Terms and Conditions.<br>";
    }

    // Display error messages or submit form
    const errorDiv = document.getElementById('errorMessages');
    if (errorMessages) {
        errorDiv.innerHTML = errorMessages;
        return false;  // Prevent form submission
    } else {
        errorDiv.innerHTML = ""; // Clear previous errors
        alert("Registration Successful!");
        return true;  // Allow form submission
    }
}
