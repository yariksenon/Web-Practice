// После загрузки документа (DOM)
$(document).ready(function(){
    // Инициализация всплывающих подсказок для всех элементов с атрибутом data-toggle="tooltip"
    $('[data-toggle="tooltip"]').tooltip();
});
