document.addEventListener('DOMContentLoaded', () => {
  const detailsButtons = document.querySelectorAll('.details-toggle'); // Всі кнопки

  detailsButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id'); // Отримуємо ID кнопки
      const detailEl = document.getElementById(`${id}-details`); // Отримуємо елемент для цього ID

      // Якщо це вікно вже відкрите, закриваємо його
      if (!detailEl.classList.contains('hidden')) {
        detailEl.classList.add('hidden');
        detailEl.style.transform = 'translateY(-5px)'; // Згортаємо
        detailEl.style.opacity = '0'; // Робимо непрозорим
      } else {
        // Якщо інше вікно відкрите, закриваємо його
        document.querySelectorAll('.popup-details').forEach(el => {
          if (!el.classList.contains('hidden')) {
            el.classList.add('hidden');
            el.style.transform = 'translateY(-5px)';
            el.style.opacity = '0';
          }
        });

        // Відкриваємо поточне вікно
        detailEl.classList.remove('hidden');
        detailEl.style.transition = 'transform 0.3s ease, opacity 0.3s ease'; // Плавне відкриття
        detailEl.style.transform = 'translateY(0) translateX(420px)'; // Розгортання
        detailEl.style.opacity = '1'; // Робимо видимим
      }
    });
  });
});