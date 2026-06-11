document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("collegeAudio");
  const playBtn = document.querySelector(".play-btn");
  const icon = playBtn.querySelector("i");

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      audio.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  });
});
