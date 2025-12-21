document.addEventListener("DOMContentLoaded", () => {
  const search_icon = document.querySelector("#search-icon button");
  const search_container = document.querySelector(".search-container");
  const search_bar = document.querySelector(".search-bar");
  const close_btn = document.querySelector(".close-btn");

  /*clicking search icon */
  search_icon.addEventListener("click", () => {
    search_container.classList.add("show");
    close_btn.classList.add("show");
  });

  /*clicking close btn */
  close_btn.addEventListener("click", () => {
    close_btn.classList.remove("show");
    search_container.classList.remove("show");
  });

  /*searching on search button */
  search_bar.addEventListener("mouseenter", () => {
    search_bar.classList.toggle("hover");
  });
});
