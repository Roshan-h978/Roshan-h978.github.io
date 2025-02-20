document.addEventListener("DOMContentLoaded", function() {
    // Image Slider (Carousel)
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider img");
    const nextButton = document.querySelector(".slider-button.right");
    const prevButton = document.querySelector(".slider-button.left");
  
    function changeSlide() {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
      });
    }
  
    nextButton.addEventListener("click", function() {
      currentSlide = (currentSlide + 1) % slides.length;
      changeSlide();
    });
  
    prevButton.addEventListener("click", function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      changeSlide();
    });
  
    changeSlide(); // Initialize the slider
  
    // Accordion FAQ Section
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(acc => {
      acc.addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    });
  
    // Live Chat Button
    const chatButton = document.getElementById("chatButton");
    chatButton.addEventListener("click", function() {
      alert("Live chat feature coming soon!");
    });
  
    // Star Rating System (for Course Rating)
    const starInputs = document.querySelectorAll(".star-rating input");
    starInputs.forEach(input => {
      input.addEventListener("change", function() {
        const ratingValue = this.value;
        alert(`You rated this course ${ratingValue} star(s)!`);
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    // Image Slider (Carousel)
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider img");
    const nextButton = document.querySelector(".slider-button.right");
    const prevButton = document.querySelector(".slider-button.left");
  
    function changeSlide() {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
      });
    }
  
    nextButton.addEventListener("click", function() {
      currentSlide = (currentSlide + 1) % slides.length;
      changeSlide();
    });
  
    prevButton.addEventListener("click", function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      changeSlide();
    });
  
    changeSlide(); // Initialize the slider
  
    // Accordion FAQ Section
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(acc => {
      acc.addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    });
  
    // Live Chat Button
    const chatButton = document.getElementById("chatButton");
    chatButton.addEventListener("click", function() {
      alert("Live chat feature coming soon!");
    });
  
    // Star Rating System (for Course Rating)
    const starInputs = document.querySelectorAll(".star-rating input");
    starInputs.forEach(input => {
      input.addEventListener("change", function() {
        const ratingValue = this.value;
        alert(`You rated this course ${ratingValue} star(s)!`);
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
  

    // Login form handling (dummy validation)
    document.getElementById("loginForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username && password) {
        alert("Login successful");
      } else {
        alert("Please enter username and password");
      }
    });
  
    // Sign-up form handling (dummy validation)
    document.getElementById("signupForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const newPassword = document.getElementById("newPassword").value;
      
      if (email && newPassword) {
        alert("Sign-up successful");
      } else {
        alert("Please fill in all fields");
      }
    });
  
    // Membership status display
    const membershipStatus = document.getElementById("membershipStatus");
    if (membershipStatus) {
      membershipStatus.innerText = "You are currently a Free Member";
    }
  
    // Smooth UI transitions
    document.querySelectorAll("button").forEach(button => {
      button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
      });
      button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Toggle content visibility
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function() {
            let content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
            this.textContent = this.textContent.includes("⌄") ? this.textContent.replace("⌄", "⌃") : this.textContent.replace("⌃", "⌄");
        });
    });

    // Cookie banner logic
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookies = document.getElementById("accept-cookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block";
    }

    acceptCookies.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });
});
