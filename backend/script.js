document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const response = document.getElementById("responseMsg");

 
  if (name && email && message) {
    response.textContent = `Thank you, ${name}! Your message has been received.`;
    response.style.color = "green";
    document.getElementById("contactForm").reset();
  } else {
    response.textContent = "Please fill out all fields!";
    response.style.color = "red";
  }
});
