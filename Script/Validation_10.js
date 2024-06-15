// Получение ссылок на элементы кнопок "Sign Up", "Sign In" и контейнер формы
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Добавление обработчика события click для кнопки "Sign Up":
// при клике добавляется класс 'right-panel-active' к контейнеру,
// запуская анимацию перехода на панель регистрации
signUpButton.addEventListener('click', () =>
  container.classList.add('right-panel-active'));

// Добавление обработчика события click для кнопки "Sign In":
// при клике удаляется класс 'right-panel-active' из контейнера,
// запуская анимацию перехода на панель входа
signInButton.addEventListener('click', () =>
  container.classList.remove('right-panel-active'));

// Функция для проверки корректности введенного адреса электронной почты
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Функция для проверки длины пароля (не менее 6 символов)
function validatePassword(password) {
  return password.length >= 6;
}

// Добавление обработчика события submit для всех форм на странице:
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращение стандартного действия отправки формы

    // Получение ссылок на элементы ввода электронной почты, пароля и имени
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const nameInput = form.querySelector('input[type="text"]');

    let valid = true; // Флаг для отслеживания валидности формы
    let errorMessage = ''; // Строка для сбора сообщений об ошибках

    // Проверка на наличие введенного имени (если поле существует и пусто)
    if (nameInput && nameInput.value.trim() === '') {
      valid = false;
      errorMessage += 'Требуется имя.\n';
    }

    // Проверка корректности введенного адреса электронной почты
    if (!validateEmail(emailInput.value)) {
      valid = false;
      errorMessage += 'Неверный адрес электронной почты.\n';
    }

    // Проверка длины введенного пароля
    if (!validatePassword(passwordInput.value)) {
      valid = false;
      errorMessage += 'Пароль должен содержать не менее 6 знаков.\n';
    }

    // Если все данные введены корректно, перенаправляем на страницу 'index.html',
    // иначе выводим сообщение об ошибках через alert()
    if (valid) {
      window.location.href = '../Main.html';
    } else {
      alert(errorMessage);
    }
  });
});
