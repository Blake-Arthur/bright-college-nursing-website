document.addEventListener("DOMContentLoaded", () => {
  const goTop = document.querySelector(".go-top");
  const whatsapp = document.querySelector(".whatsapp-btn");
  const chatBot = document.querySelector("#openChatBot");
  const SHOW_AFTER = 300; // px scrolled

  whatsapp.classList.add("show");

  window.addEventListener("scroll", () => {
    if (window.scrollY > SHOW_AFTER) {
      goTop.classList.add("show");
      chatBot.classList.add("show");
    } else {
      goTop.classList.remove("show");
      // whatsapp.classList.remove("show");
      chatBot.classList.remove("show");
    }
  });

  goTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const bubble = document.querySelector(".whatsapp-bubble");

  bubble.addEventListener("mouseenter", () => {
    bubble.textContent = "Chat with us";
  });

  bubble.addEventListener("mouseleave", () => {
    bubble.textContent = "WhatsApp";
  });

  const overlay = document.querySelector("#chat-bot");

  if (overlay.contains("is-active")) {
    chatBot.classList.remove("show");
  }
});
