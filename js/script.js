let senderName = document.querySelector("#sender-name");
let senderEmail = document.querySelector("#sender-email");
let messageSubject = document.querySelector("#message-subject");
let messageBody = document.querySelector("#message-body");
let sendBtn = document.querySelector("#send");

let details = [senderName, senderEmail, messageSubject, messageBody];

let contactForm = document.forms[0];
sendBtn.addEventListener("click", function validate(e) {
  e.preventDefault();
  for (i = 0; i < details.length; i++) {
    if (details[i].value !== "") {
      //details[i].style.borderColor = "teal";
      const formData = new FormData();
      formData.append("name", details[0].value);
      formData.append("email", details[1].value);
      formData.append("subject", details[2].value);
      formData.append("body", details[3].value);

      fetch("https://getform.io/f/6bc58a62-b63d-4ba6-812a-e77c55beebe4", {
        method: "POST",
        body: formData,
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } else {
      details[i].style.borderColor = "red";
      details[i].placeholder = "Required field";
    }
  }
});
