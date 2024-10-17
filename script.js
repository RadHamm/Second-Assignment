// Select the input field, buttons, display area, and welcome message
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const usernameInput = document.getElementById('username');
const displayName = document.getElementById('display-name');
const welcomeMessage = document.getElementById('welcome-message');

// function to update welcome message based on time of day
function updatewelcomeMessage() {
    const hours = new Date().getHours();
    let message;
    if (hours < 12) {
        message = "Good Morning!";
    } else if (hours < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }
    welcomeMessage.textContent = message;
    }

// Function to display the saved name
function displaySavedName() {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        displayName.textContent = `Saved Name: ${savedName}`;
    }
}

// Event listener for the "Save Name" button
saveBtn.addEventListener('click', () => {
    const name = usernameInput.value;
    if (name) {
        localStorage.setItem('username', name);
        displayName.textContent = `Saved Name: ${name}`;
    }
});

// Event listener for the "Clear Name" button
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    usernameInput.value = '';
    displayName.textContent = '';
});

// Display the saved name and welcome message (based on time) when the page loads
window.addEventListener('load', () => {
    updatewelcomeMessage();
    displaySavedName();
});