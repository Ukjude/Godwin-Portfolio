// Typing Effect
const typing = document.querySelector(".typing");
const textArray = ["Data Analyst","Excel Expert", "Power BI Expert", "SQL Developer", "Python Enthusiast"];
let textIndex = 0, charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typing.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typing.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 200);
  }
}
document.addEventListener("DOMContentLoaded", type);



function showSideBar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}
function closeSideBar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// Back to Top Button
const backToTopButton = document.getElementById("backToTop");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const footerPosition = footer.offsetTop; 

  
  if (scrollPosition >= footerPosition - 100) { 
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scroll to top
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// EMAIL JS
function sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    messsage : document.getElementById("message").value,
  }

  emailjs.send("service_33iuqcw","template_l0ks4bd",parms).then(alert("Email Sent !!"))
}