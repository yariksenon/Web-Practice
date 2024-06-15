// Установка радиуса карусели
let radius = 240;
// Флаг автоматического вращения карусели
let autoRotate = true;
// Скорость вращения карусели в градусах в секунду
let rotateSpeed = -60;
// Ширина каждого изображения в карусели
let imgWidth = 140;
// Высота каждого изображения в карусели
let imgHeight = 205;

// Запуск инициализации карусели через 300 миллисекунд
setTimeout(init, 300);

// Получение элементов DOM
let odrag = document.getElementById("drag-container");
let ospin = document.getElementById("spin-container");
let carousel = document.getElementById("carousel");
let aImg = ospin.getElementsByTagName("a");

// Установка размеров контейнера вращения и основания карусели
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";
let ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

// Функция инициализации позиций изображений в карусели
function init(delayTime) {
  for (let i = 0; i < aImg.length; i++) {
    // Установка позиции и анимации для каждого изображения
    aImg[i].style.transform =
      "rotateY(" +
      i * (360 / aImg.length) +
      "deg) translateZ(" +
      radius +
      "px)";
    aImg[i].style.transition = "transform 1s";
    aImg[i].style.transitionDelay = delayTime || (aImg.length - i) / 4 + "s";
  }
}

// Применение трансформации к объекту (в данном случае, карусели)
function applyTranform(obj) {
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;
  obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}

// Запуск или остановка вращения карусели
function playSpin(yes) {
  ospin.style.animationPlayState = yes ? "running" : "paused";
}

// Инициализация переменных для отслеживания движения мыши
let sX,
  sY,
  nX,
  nY,
  desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

// Если установлен флаг автоматического вращения
if (autoRotate) {
  // Определение направления вращения и установка анимации
  let animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
  ospin.style.animation = `${animationName} ${Math.abs(
    rotateSpeed
  )}s infinite linear`;
}

// Обработчик события нажатия кнопкой мыши на карусель
carousel.onpointerdown = function (e) {
  clearInterval(odrag.timer); // Очистка таймера
  e = e || window.event;
  let sX = e.clientX,
    sY = e.clientY;

  // Обработчик движения мыши
  this.onpointermove = function (e) {
    e = e || window.event;
    let nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  // Обработчик отпускания кнопки мыши
  this.onpointerup = function (e) {
    // Установка интервала для плавного затухания движения
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false); // Остановка вращения
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer); // Остановка таймера
        playSpin(true); // Возобновление автоматического вращения
      }
    }, 17); // Интервал в 17 миллисекунд
    this.onpointermove = this.onpointerup = null; // Сброс обработчиков событий
  };

  return false; // Предотвращение стандартного поведения браузера
};
