document.addEventListener('DOMContentLoaded', () => {
  const detailsButtons = document.querySelectorAll('.details-toggle'); // Всі кнопки

  detailsButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const id = button.getAttribute('data-id'); // Отримуємо ID кнопки
      const detailEl = document.getElementById(`${id}-details`); // Отримуємо елемент для цього ID

      // Перевіряємо, чи мобільний пристрій
      const isMobile = window.innerWidth < 768;  // Якщо ширина екрана менша за 768px (мобільний пристрій)

      // Якщо це вікно вже відкрите, закриваємо його
      if (!detailEl.classList.contains('hidden')) {
        detailEl.classList.add('hidden');
        detailEl.style.transform = isMobile ? 'translateY(-5px)' : 'translateY(-5px) translateX(0px)'; // Закриваємо для мобільних без зміщення
        detailEl.style.opacity = '0'; // Робимо непрозорим
      } else {
        // Якщо інше вікно відкрите, закриваємо його
        document.querySelectorAll('.popup-details').forEach(el => {
          if (!el.classList.contains('hidden')) {
            el.classList.add('hidden');
            el.style.transform = isMobile ? 'translateY(-5px)' : 'translateY(-5px) translateX(0px)';
            el.style.opacity = '0';
          }
        });

        // Відкриваємо поточне вікно
        detailEl.classList.remove('hidden');
        detailEl.style.transition = 'transform 0.3s ease, opacity 0.3s ease'; // Плавне відкриття
        detailEl.style.transform = isMobile ? 'translateY(0)' : 'translateY(0) translateX(420px)'; // Для мобільних без зміщення, на десктопах зміщуємо
        detailEl.style.opacity = '1'; // Робимо видимим
      }

      // Запобігаємо поширенню події на батьківські елементи
      event.stopPropagation();
    });
  });

  // Закриваємо попап, якщо клікають поза попапом
  document.addEventListener('click', (event) => {
    const isPopupClicked = event.target.closest('.popup-details') !== null;
    const isButtonClicked = event.target.closest('.details-toggle') !== null;

    // Якщо не натискали на кнопку або сам попап, закриваємо всі попапи
    if (!isPopupClicked && !isButtonClicked) {
      document.querySelectorAll('.popup-details').forEach(el => {
        el.classList.add('hidden');
        el.style.transform = 'translateY(-5px)';
        el.style.opacity = '0';
      });
    }
  });
});