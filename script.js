document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".proposal-btn");
  const popupOverlay = document.getElementById("popupOverlay");
  const popupText = document.getElementById("popupText");
  const closePopup = document.getElementById("closePopup");

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Get message from button
      const message = button.getAttribute("data-message");

      popupText.textContent = message;
      popupOverlay.classList.add("show");
    });
  });

  closePopup.addEventListener("click", () => {
    popupOverlay.classList.remove("show");
  });

  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove("show");
    }
  });
});
