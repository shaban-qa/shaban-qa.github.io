
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.details-toggle').forEach(button => {
      button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const detailEl = document.getElementById(`${id}-details`);
        
        if (detailEl.classList.contains('hidden')) {
          detailEl.classList.remove('hidden');
        } else {
          detailEl.classList.add('hidden');
        }
      });
    });
  });