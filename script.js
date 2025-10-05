// ===== MENU TOGGLE FUNCTIONALITY =====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.onclick = () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    };
});

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

// Start effect when page loads
if (typing) {
    typeEffect();
}


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
        backgroundColor: "#ff6b35"
      },
      button: {
        backgroundColor: "#ff6b35"
      }
    }
  });

// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ACTIVE SECTION HIGHLIGHTING =====
const sections = document.querySelectorAll('section');
const navLinkItems = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
