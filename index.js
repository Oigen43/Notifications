function Notification() {
}

Notification.prototype.showNotification = function() {
    var notificationsList = document.querySelector('.section-notifications');
    var notification = document.createElement('div');
    notification.className = this.type;
    notification.innerHTML = this.content;
    notificationsList.appendChild(notification);
    setTimeout(removeToast, this.time, notification);
};

function ToastNotification(type, content) {
    this.type = type;
    this.content = content;
    this.time = 1000; // 5s
};

ToastNotification.prototype = Object.create(Notification.prototype);

var errorButton = document.querySelector('.error-button');
var warningButton = document.querySelector('.warning-button');
var successButton = document.querySelector('.success-button');
var infoButton = document.querySelector('.info-button');
var modalButton = document.querySelector('.modal-button');

errorButton.onclick = function() {
    var error = new ToastNotification('error-notification notification',
        '<i class="fas fa-times"></i><h4>Error</h4><i class="far fa-times-circle"></i>');
    error.showNotification();
}

warningButton.onclick = function() {
    var warning = new ToastNotification('warning-notification notification',
        '<i class="fas fa-exclamation-triangle"></i><h4>Warning</h4><i class="far fa-times-circle"></i>');
    warning.showNotification();
}

successButton.onclick = function() {
    var success = new ToastNotification('success-notification notification',
        '<i class="fas fa-check"></i><h4>Success</h4><i class="far fa-times-circle"></i>');
    success.showNotification();
}

infoButton.onclick = function() {
    var info = new ToastNotification('info-notification notification',
        '<i class="fas fa-info"></i><h4>Info</h4><i class="far fa-times-circle"></i>');
    info.showNotification();
}

modalButton.onclick = function() {
    var modal = document.querySelector('.modal');
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    toggleModal();
    window.onclick = function(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    closeButton.onclick = toggleModal;
}

var toastsSection = document.querySelector('.section-notifications');
toastsSection.onclick = function(event) {
    var target = event.target;
    if (target.className != 'far fa-times-circle') return;
    removeToast(target.parentNode);
}

function removeToast(elem) {
    elem.remove();
}