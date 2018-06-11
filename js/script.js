// ссылка для подключения файла JS к html
// C:\Users\Anna\Documents\GitHub\799743-device\img
// <script src="путь_к_файлу_скрипта/script.js"></script>
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [0, 5000],
  connect: true,
  range: {
    'min': 0,
    'max': 10000
  }
});
// Что это за фигня????Не понимаю?????????????????
// npm install nouislider
// yarn add nouislider
