document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("modal-overlay");
  const openBtn = document.querySelector("[data-enquiry-open]");
  const closeBtn = document.querySelector("[data-enquiry-close]");
  const form = document.getElementById("form-grid");

  // prevents JS crash on pages without modal
  if (!overlay || !openBtn || !closeBtn) return;

  /* ======================
      OPEN MODAL
  ====================== */
  openBtn.addEventListener("click", () => {
    overlay.classList.add("is-active");
    overlay.setAttribute("aria-hidden", "false");
  });

  /* ======================
      CLOSE MODAL
  ====================== */
  function closeModal() {
    overlay.classList.remove("is-active");
    overlay.setAttribute("aria-hidden", "true");
  }

  closeBtn.addEventListener("click", closeModal);

  // // Close when clicking outside modal
  // overlay.addEventListener("click", (e) => {
  //   if (e.target === overlay) {
  //     closeModal();
  //   }
  // });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-active")) {
      closeModal();
    }
  });

  /* ======================
      FORM SUBMISSION
  ====================== */
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector("button[type='submit']");
      const messageBox = document.getElementById("formMessage");

      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
      messageBox.textContent = "";

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch("/api/enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Submission failed.");
        }

        messageBox.textContent =
          "Your enquiry has been submitted successfully. We will contact you soon.";
        messageBox.style.color = "green";

        form.reset();
      } catch (err) {
        messageBox.textContent = err.message;
        messageBox.style.color = "red";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
      }
    });
  }
});
