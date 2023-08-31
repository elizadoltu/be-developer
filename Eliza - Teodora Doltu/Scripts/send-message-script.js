document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("message-form");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;
    const message = messageInput.value;

    // Here you can perform any desired actions with the email and message,
    // such as sending them to a server or displaying them on the page.

    // For demonstration purposes, let's log the values to the console.
    console.log("Email:", email);
    console.log("Message:", message);

    // You can reset the form after submission if needed.
    form.reset();
  });
});
