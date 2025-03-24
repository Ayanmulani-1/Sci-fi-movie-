document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Simple login validation (for demonstration purposes)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'ayanmulani' && password === 'ayan@5426') {
        // Hide login and show movies
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('movies-container').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
});