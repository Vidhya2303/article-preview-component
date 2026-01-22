const seeMoreBtn = document.getElementById("soc-media-btn");
const socMediaContainer = document.querySelector(
  ".component__general-information-container--user-soc-media-container",
);
const hide = document.querySelector(
  ".component__general-information-container--user-information",
);
const triangle = document.querySelector(".triangle");
const footer = document.querySelector(".footer");
// let viewportWidth = window.innerWidth;
seeMoreBtn.addEventListener("click", () => {
  socMediaContainer.classList.toggle("seeMore");
  if (window.innerWidth < 700) {
    hide.classList.toggle("hide");
    footer.classList.toggle("backgroundChanger");
  } else if (window.innerWidth > 700) {
    triangle.classList.toggle("effSeeMore");
  }
});
