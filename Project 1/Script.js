const image = document.getElementById("image");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

function updateImage() {
  image.src = images[currentIndex];
}
const formContent = document.getElementById("formContent");
const infoBox = document.getElementById("infoBox");
const submittedName = document.getElementById("submittedName");
const submittedEmail = document.getElementById("submittedEmail");
const submittedPhone = document.getElementById("submittedPhone");
const submittedMessage = document.getElementById("submittedMessage");

formContent.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  submittedName.textContent = name;
  submittedEmail.textContent = email;
  submittedPhone.textContent = phone;
  submittedMessage.textContent = message;

  infoBox.style.display = "block";
});
const editableText = document.getElementById("editableText");

editableText.addEventListener("click", function() {
  const newText = prompt("Edit the text:", editableText.textContent);

  if (newText !== null) {
    editableText.textContent = newText;
  }
});









