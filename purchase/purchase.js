document.getElementById('purchaseForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const message = document.getElementById('message').value;

    // Display confirmation message
    const confirmationMessage = `
        Thank you, ${name}! Your inquiry for the ${model} in ${color} has been received.
        We will contact you shortly at ${email}.
    `;
    document.getElementById('confirmationMessage').innerText = confirmationMessage;

    // Clear form fields
    document.getElementById('purchaseForm').reset();
});
