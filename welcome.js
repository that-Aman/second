// Function to get query parameters from the URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;

    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

// Get the username from the URL
const params = getQueryParams();
const username = params.username;

// Display the welcome message
if (username) {
    document.getElementById('welcomeMessage').innerText = `Welcome, ${username}!`;
} else {
    document.getElementById('welcomeMessage').innerText = 'Welcome!';
}