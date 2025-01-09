// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select form elements
    const form = document.querySelector('form');
    const eventSelect = document.getElementById('event');
    const ticketCount = document.getElementById('ticketCount');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const orderSummary = document.querySelector('tbody');

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get values from the form
        const eventValue = eventSelect.value;
        const ticketCountValue = ticketCount.value;
        const nameValue = nameInput.value;
        const emailValue = emailInput.value;

        // Validate inputs
        if (!eventValue || !ticketCountValue || !nameValue || !emailValue) {
            alert('Please fill out all fields.');
            return;
        }

        // Add new order summary row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${eventValue}</td>
            <td>${ticketCountValue}</td>
            <td>${nameValue}</td>
            <td>${emailValue}</td>
        `;
        orderSummary.appendChild(newRow);

        // Clear the form
        form.reset();
        alert('Your order has been successfully submitted!');
    });

    // Optional: Limit ticket count range dynamically
    ticketCount.addEventListener('input', () => {
        if (ticketCount.value < 1) {
            ticketCount.value = 1;
        } else if (ticketCount.value > 10) {
            ticketCount.value = 10;
        }
    });
});
