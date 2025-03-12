// Hardcoded credentials for demonstration
const validUsername = "user123";
const validPassword = "pass123";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the username and password values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate the username and password
    if (username === validUsername && password === validPassword) {
        // Simulate a successful login
        document.getElementById('message').innerText = `Welcome, ${username}!`;
        document.getElementById('message').style.color = '#28a745'; // Green for success
    } else {
        document.getElementById('message').innerText = 'Invalid username or password. Please try again.';
        document.getElementById('message').style.color = '#dc3545'; // Red for error
    }
});