document.addEventListener('DOMContentLoaded', function() {
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Basic validation
            if (username && password) {
                // In a real app, you would verify credentials with a server
                // For demo purposes, we'll just store the session
                localStorage.setItem('isAuthenticated', 'true');
                window.location.href = 'home.html';
            } else {
                alert('Please enter both username and password');
            }
        });
    }

    // Logout button handling
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('isAuthenticated');
            window.location.href = 'index.html';
        });
    }

    // Check authentication on home page
    if (window.location.pathname.includes('home.html')) {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            window.location.href = 'index.html';
        }
    }
});
