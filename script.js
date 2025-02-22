function toggleExpand(element) {
  // Collapse all other offer options
  const allOptions = document.querySelectorAll(".offer-option");
  allOptions.forEach((option) => {
    if (option !== element) {
      option.classList.remove("expanded");
    }
  });

  // Toggle the clicked offer option
  element.classList.toggle("expanded");
}

// Prevent collapse when interacting with dropdowns
document.querySelectorAll(".dropdown select").forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
