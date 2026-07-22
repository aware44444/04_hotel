// =========================
// hamburger menu
// =========================

const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");
const navLinks = document.querySelectorAll(".global-nav a");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("is-open");
  globalNav.classList.toggle("is-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.classList.remove("is-open");
    globalNav.classList.remove("is-open");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menuButton.classList.remove("is-open");
    globalNav.classList.remove("is-open");
  }
});

// =========================
// faq accordion
// =========================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;

    faqItem.classList.toggle("is-open");
  });
});

// =========================
// plan tabs
// =========================

const planTabButtons = document.querySelectorAll(".plan-tab-button");
const planTabContents = document.querySelectorAll(".plan-tab-content");

planTabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    planTabButtons.forEach((button) => {
      button.classList.remove("is-active");
    });

    planTabContents.forEach((content) => {
      content.classList.remove("is-active");
    });

    button.classList.add("is-active");
    planTabContents[index].classList.add("is-active");
  });
});


// =========================
// contact form validation
// =========================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const categorySelect = document.querySelector("#category");
  const messageTextarea = document.querySelector("#message");
  const successMessage = document.querySelector(".form-success-message");

  const showError = (input, message) => {
    const formItem = input.closest(".form-item");
    const errorMessage = formItem.querySelector(".error-message");

    formItem.classList.add("is-error");
    errorMessage.textContent = message;
  };

  const clearError = (input) => {
    const formItem = input.closest(".form-item");
    const errorMessage = formItem.querySelector(".error-message");

    formItem.classList.remove("is-error");
    errorMessage.textContent = "";
  };

  const validateForm = () => {
    let isValid = true;

    if (nameInput.value.trim() === "") {
      showError(nameInput, "お名前を入力してください。");
      isValid = false;
    } else {
      clearError(nameInput);
    }

    if (emailInput.value.trim() === "") {
      showError(emailInput, "メールアドレスを入力してください。");
      isValid = false;
    } else if (!emailInput.value.includes("@")) {
      showError(emailInput, "メールアドレスの形式を確認してください。");
      isValid = false;
    } else {
      clearError(emailInput);
    }

    if (categorySelect.value === "") {
      showError(categorySelect, "お問い合わせ種別を選択してください。");
      isValid = false;
    } else {
      clearError(categorySelect);
    }

    if (messageTextarea.value.trim() === "") {
      showError(messageTextarea, "お問い合わせ内容を入力してください。");
      isValid = false;
    } else {
      clearError(messageTextarea);
    }

    return isValid;
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    successMessage.textContent = "";

    if (validateForm()) {
      successMessage.textContent = "お問い合わせありがとうございます。現在はデモフォームです。";
      contactForm.reset();
    }
  });

  const formFields = [nameInput, emailInput, categorySelect, messageTextarea];

  formFields.forEach((field) => {
    field.addEventListener("input", () => {
      clearError(field);
      successMessage.textContent = "";
    });
  });
}
// =========================
// fade in animation
// =========================

const fadeInElements = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      fadeInObserver.unobserve(entry.target);
    }
  });
}, {
  rootMargin: "0px 0px -10% 0px",
  threshold: 0
});

fadeInElements.forEach((element) => {
  fadeInObserver.observe(element);
});