function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    var isValid = true;

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        return false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    }

    window.location.href = 'main.html';
     return false;
}

function showLoadingPopup() {
    const loadingPopup = document.getElementById('loadingPopup');
    loadingPopup.style.display = 'block';

    setTimeout(() => {
        loadingPopup.style.display = 'none';
        alert('Logged in successfully!');
    }, 2000); 

    return false;
}

function handleLogin() {

    // alert('Login successful!');
    window.location.href = 'main.html';
    return false; 
}

function handleForgotPassword(event) {
    event.preventDefault(); 
    var email = document.getElementById("email").value;

    showAlert("Password reset link has been sent to your email.");

    setTimeout(function() {
        window.location.href = "login.html";
    }, 3000); 

    return true;
}

function showAlert(message) {
    var customAlert = document.getElementById("customAlert");
    var alertMessage = document.getElementById("alertMessage");
    alertMessage.textContent = message;
    customAlert.style.display = "block";
}

function closeAlert() {
    var customAlert = document.getElementById("customAlert");
    customAlert.style.display = "none";
}

document.getElementById('searchButton').addEventListener('click', function() {
    let searchValue = document.getElementById('searchInput').value.toLowerCase();
    let cardItems = document.querySelectorAll('.card-item');
    
    cardItems.forEach(function(item) {
        let itemName = item.getAttribute('data-name').toLowerCase();
        if (itemName.includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});