document.addEventListener("DOMContentLoaded", () => {
  // Dropdown menu toggle (з перевіркою)
  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden");
    });
  }

  // Service details toggle with event delegation (з перевіркою)
  const servicesSection = document.querySelector("#services");

  if (servicesSection) {
    servicesSection.addEventListener("click", (e) => {
      const button = e.target.closest(".details-toggle");
      if (button) {
        const id = button.dataset.id;
        if (id) {
          const details = document.getElementById(`${id}-details`);
          if (details) {
            // Toggle visibility
            details.classList.toggle("hidden");

            // Position the popup relative to the button
            if (!details.classList.contains("hidden")) {
              const rect = button.getBoundingClientRect();
              details.style.position = "absolute"; // Переконайтеся, що popup-details має position absolute
              details.style.left = `${rect.left + rect.width / 2}px`;
              details.style.top = `${rect.bottom + window.scrollY + 5}px`;
            }

            // Hide other popups
            document.querySelectorAll(".popup-details").forEach((popup) => {
              if (popup !== details && !popup.classList.contains("hidden")) {
                popup.classList.add("hidden");
              }
            });
          }
        }
      }
    });
  }

  // Close popups when clicking outside (залишилось без змін, але безпечне)
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".details-toggle") && !e.target.closest(".popup-details")) {
      document.querySelectorAll(".popup-details").forEach((popup) => {
        popup.classList.add("hidden");
      });
    }
  });
});
