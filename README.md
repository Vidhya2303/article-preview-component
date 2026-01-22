# Article preview component
This project was created based on a Frontend Mentor [https://www.frontendmentor.io/] challenge. The layout and design idea come from Frontend Mentor, while the code implementation is my own.

## 📦 Technologies
- HTML5 — Semantic markup for better accessibility and SEO.
- CSS3 — Custom styling using CSS Grid and Flexbox for layout management.
- JavaScript (ES6+) — DOM manipulation and event handling for interactive components.
- Desctop-First Workflow — Ensuring a seamless experience across all device sizes.
- BEM Methodology — Block Element Modifier naming convention for clean and maintainable CSS.
- Google Fonts — Typography integration (Manrope font).

## 📚 What I Learned

- Responsive Logic
I learned how to implement different interactive behaviors based on screen size:
On Desktop: Using position: absolute and z-index to create a floating tooltip above the share button.
On Mobile: Using JavaScript to toggle a custom background color for the footer and hide/show user information to provide a seamless mobile experience.
- DOM Manipulation with Vanilla JS
I deepened my understanding of the classList.toggle() method and how to use window.innerWidth within event listeners to trigger specific UI changes only on certain viewports.
- BEM Methodology
I followed the BEM (Block Element Modifier) naming convention to keep the CSS organized and scalable, which helped in managing the complex relationships between the article content and the social media overlay.
- JavaScript

`seeMoreBtn.addEventListener("click", () => {
  socMediaContainer.classList.toggle("seeMore");
  if (window.innerWidth < 700) {
    hide.classList.toggle("hide");
    footer.classList.toggle("backgroundChanger");
  }
});`

## 🚀 How It Can Be Improved?
While the project is fully functional, here are some areas for future enhancement:

- Accessibility: Implement aria-expanded attributes for the share button to inform screen reader users whether the social menu is open or closed.
- "Click Outside" Logic: Add a JavaScript event listener to close the share menu automatically when a user clicks anywhere outside the component.
- CSS Custom Properties: Refactor the CSS to use Variables (e.g., --primary-dark-blue, --light-grayish-blue) for easier theme management and better maintainability.
- Smooth Transitions: Add CSS transitions/animations for the tooltip appearance (opacity and transform) to make the UI feel more polished and fluid.

## 🍿 Video
