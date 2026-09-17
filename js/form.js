/* ========================================================================
   Kamala Interprises — Contact Form
   Google Sheets + Email Notification
   ======================================================================== */

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwFljEbDHB_Ty_Agdi3jRJQmbesE0t0_4akh1Iw59hw-0Q2gHwCS_3lyxIRhIkMcEhb/exec";


/* ------------------------------------------------------------------------
   Sanitize input
   ------------------------------------------------------------------------ */

function sanitizeInput(value) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .trim();
}


/* ------------------------------------------------------------------------
   Validate email
   ------------------------------------------------------------------------ */

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* ------------------------------------------------------------------------
   Validate phone
   ------------------------------------------------------------------------ */

function isValidPhone(phone) {
  return /^[0-9+\-\s()]{7,16}$/.test(phone);
}


/* ------------------------------------------------------------------------
   Show / hide field error
   ------------------------------------------------------------------------ */

function showFieldError(fieldEl, show) {
  if (fieldEl) {
    fieldEl.classList.toggle("invalid", show);
  }
}


/* ------------------------------------------------------------------------
   Validate form
   ------------------------------------------------------------------------ */

function validateForm(form) {

  let valid = true;

  const name = form.querySelector("#f-name");
  const phone = form.querySelector("#f-phone");
  const email = form.querySelector("#f-email");
  const product = form.querySelector("#quote-product-select");
  const message = form.querySelector("#f-message");


  // Name
  const nameOk =
    name && sanitizeInput(name.value).length >= 2;

  if (name) {
    showFieldError(
      name.closest(".field"),
      !nameOk
    );
  }

  valid = valid && nameOk;


  // Phone
  const phoneOk =
    phone &&
    isValidPhone(
      sanitizeInput(phone.value)
    );

  if (phone) {
    showFieldError(
      phone.closest(".field"),
      !phoneOk
    );
  }

  valid = valid && phoneOk;


  // Email
  const emailOk =
    email &&
    isValidEmail(
      sanitizeInput(email.value)
    );

  if (email) {
    showFieldError(
      email.closest(".field"),
      !emailOk
    );
  }

  valid = valid && emailOk;


  // Product
  const productOk =
    product &&
    product.value !== "";

  if (product) {
    showFieldError(
      product.closest(".field"),
      !productOk
    );
  }

  valid = valid && productOk;


  // Message
  const messageOk =
    message &&
    sanitizeInput(message.value).length >= 5;

  if (message) {
    showFieldError(
      message.closest(".field"),
      !messageOk
    );
  }

  valid = valid && messageOk;


  return valid;
}


/* ------------------------------------------------------------------------
   Send form to Google Apps Script
   ------------------------------------------------------------------------ */

function sendToGoogleSheet(data) {

  const formData = new URLSearchParams();

  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);

  // Product is sent as the subject
  formData.append("subject", data.product);

  formData.append("message", data.message);


  return fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: formData,
    mode: "no-cors"
  });
}


/* ------------------------------------------------------------------------
   Success notification
   ------------------------------------------------------------------------ */

function showSuccessPopup(
  message = "Thank you for contacting us. We will connect with you soon."
) {

  const popup =
    document.getElementById("success-popup");

  if (!popup) return;


  const heading =
    popup.querySelector("h5");

  const text =
    popup.querySelector("p");


  if (heading) {
    heading.textContent = "Thank You!";
  }

  if (text) {
    text.textContent = message;
  }


  popup.classList.add("show");


  setTimeout(() => {
    popup.classList.remove("show");
  }, 5000);
}


/* ------------------------------------------------------------------------
   Failure notification
   ------------------------------------------------------------------------ */

function showFormFailure(
  message = "Something went wrong. Please try again."
) {

  const popup =
    document.getElementById("success-popup");

  if (!popup) return;


  const heading =
    popup.querySelector("h5");

  const text =
    popup.querySelector("p");


  if (heading) {
    heading.textContent = "Unable to Send";
  }

  if (text) {
    text.textContent = message;
  }


  popup.classList.add("show");


  setTimeout(() => {
    popup.classList.remove("show");
  }, 6500);
}


/* ------------------------------------------------------------------------
   Initialize contact form
   ------------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {

  const form =
    document.getElementById("quote-form");

  if (!form) return;


  /* Clear error when user edits a field */

  form
    .querySelectorAll(
      "input, select, textarea"
    )
    .forEach(el => {

      el.addEventListener("input", () => {

        showFieldError(
          el.closest(".field"),
          false
        );

      });


      el.addEventListener("change", () => {

        showFieldError(
          el.closest(".field"),
          false
        );

      });

    });


  /* Form submission */

  form.addEventListener(
    "submit",
    async (e) => {

      e.preventDefault();


      // Stop if validation fails
      if (!validateForm(form)) {
        return;
      }


      // Collect customer information
      const data = {

        name: sanitizeInput(
          form.querySelector("#f-name").value
        ),

        phone: sanitizeInput(
          form.querySelector("#f-phone").value
        ),

        email: sanitizeInput(
          form.querySelector("#f-email").value
        ),

        product:
          form.querySelector(
            "#quote-product-select"
          ).value,

        message: sanitizeInput(
          form.querySelector("#f-message").value
        )

      };


      // Submit button
      const submitBtn =
        document.getElementById(
          "form-submit-btn"
        );


      if (submitBtn) {

        submitBtn.classList.add("loading");
        submitBtn.disabled = true;

      }


      try {

  // Show success immediately
  form.reset();

  showSuccessPopup(
    "Thank you for contacting us. We will connect with you soon."
  );

  // Send enquiry in the background
  sendToGoogleSheet(data)
    .then(() => {
      console.log("Enquiry sent to Google Sheet successfully.");
    })
    .catch((error) => {
      console.error(
        "Google Apps Script error:",
        error
      );
    });

} catch (error) {

  console.error(
    "Form error:",
    error
  );

  showFormFailure(
    "Something went wrong. Please try again."
  );

} finally {

  if (submitBtn) {
    submitBtn.classList.remove("loading");
    submitBtn.disabled = false;
  }

}

    }

  );

});