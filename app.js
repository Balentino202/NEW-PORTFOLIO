const form = document.querySelector("form");
const fullName = document.getElementById("form_name");
const fullEmail = document.getElementById("form_email");
const fullMessage = document.getElementById("form_message");

function sendEmail() {
    const bodyMessage = `
        Name: ${fullName.value}<br>
        Email: ${fullEmail.value}<br>
        Message: ${fullMessage.value}<br>
    `;

    Email.send({
        SecureToken : "8e4a3cc4-fd91-406d-a351-4ef5dd6ed197",
        To: 'ebikomicheal018@gmail.com',
        From: "ebikomicheal018@gmail.com",
        Subject: fullName.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
    form.reset();
    return false;

});
