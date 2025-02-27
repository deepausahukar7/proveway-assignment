function toggleExpand(element) {
  // Collapse all other offer options
  document.querySelectorAll(".offer-option").forEach((option) => {
    if (option !== element) {
      option.classList.remove("expanded");
    }
  });

  // Toggle the clicked offer option
  element.classList.toggle("expanded");

  // Update the total price based on the selected option
  updateTotalPrice(element);
}

// Prevent collapse when interacting with dropdowns
document.querySelectorAll(".dropdown select").forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => event.stopPropagation());
});

function updateTotalPrice(selectedOption) {
  const currentPriceElement = selectedOption.querySelector(".price__current");
  const totalPriceElement = document.querySelector(".total-price");

  if (currentPriceElement && totalPriceElement) {
    totalPriceElement.textContent = `Total: ${currentPriceElement.textContent}`;
  }
}

// Update total price when a radio button is selected
document
  .querySelectorAll(".offer-option input[type='radio']")
  .forEach((radio) => {
    radio.addEventListener("change", function () {
      const selectedOption = this.closest(".offer-option");
      if (selectedOption) {
        updateTotalPrice(selectedOption);
      }
    });
  });
