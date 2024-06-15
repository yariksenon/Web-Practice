function showAdModal() {
    var modal = document.getElementById("adModal");
    modal.style.display = "block";

    // Закрытие модального окна при нажатии на "x"
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрытие модального окна при клике вне его области
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Запускаем показ модального окна через 5 секунд после загрузки страницы
window.onload = function() {
    setTimeout(showAdModal, 5000);
}