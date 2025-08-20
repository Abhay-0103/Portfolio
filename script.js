let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const roles = ["Full-Stack Developer ", "AI Enthusiast ", "MERN Stack Enthusiast "];
let i = 0, j = 0, current = "", isDeleting = false;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (i >= roles.length) i = 0; // reset to first role

  if (!isDeleting && j <= roles[i].length) {
    // Typing forward
    current = roles[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    // Deleting backwards
    current = roles[i].substring(0, j--);
  }

  typing.textContent = current;

  let speed = isDeleting ? 100 : 200; // typing vs deleting speed

  if (!isDeleting && j === roles[i].length) {
    // Finished typing word
    isDeleting = true;
    speed = 1500; // pause before deleting
  } else if (isDeleting && j === 0) {
    // Finished deleting word
    isDeleting = false;
    i++; // move to next word
    speed = 600; // pause before typing next
  }

  setTimeout(typeEffect, speed);
}

// Start effect
typeEffect();


 window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/xovloyjr",
    title: "How can we help?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "#ea500c"
      },
      button: {
        backgroundColor: "#ea500c"
      }
    }
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
