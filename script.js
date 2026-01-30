gsap.registerPlugin(ScrollTrigger);







gsap.from(".about-image", {
  scrollTrigger: "about-container",
  y: 80,
  opacity: 0,
  duration: 1
})

gsap.from(".about-text", {
  scrollTrigger: "about-container",
  y: 80,
  opacity: 0,
  duration: 1
})






gsap.from(".c-text", {
  scrollTrigger: ".contact-container",
  y: 80,
  opacity: 0,
  duration: 1
});

gsap.from(".c-form", {
  scrollTrigger: ".contact-container",
  y: 80,
  opacity: 0,
  duration: 1,
  delay: 0.2
});















// Typing Effect
const typing = document.querySelector(".typing");
const textArray = ["Data Analyst","Excel Expert", "Power BI Expert", "SQL Developer", "Python Expert","Data Consultant"];
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

// SIDE BAR
const sidebar = document.querySelector('.sidebar');
function showSideBar(){
  sidebar.classList.add("active");
}

function closeSideBar(){
  sidebar.classList.remove("active");
}
// Force sidebar closed on page load
window.addEventListener("DOMContentLoaded", () => {
  sidebar.classList.remove("active");
});

let resizeTimer;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    if(window.innerWidth > 880){
      sidebar.classList.remove("active");
    }
  }, 150);
});
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});


// LOADING EFFECT
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const site = document.getElementById("site");

  // Minimum loader display time (2 seconds)
  setTimeout(() => {
    loader.classList.add("hide");
    site.classList.add("show");
  }, 3000);
});







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
function sendEmail(){
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  emailjs
  .send("service_37tgpv4", "template_4jnibg1" , templateParams)
  .then(()=> {
     alert("Email Sent!!");
  })
    .catch(()=> {
      alert("Email not sent !!");
    })
}