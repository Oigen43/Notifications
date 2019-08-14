const ID = 0;

function Notification() {
}

Notification.prototype.showNotification = function() {
    var place = document.querySelector(this.place);
    var notification = document.createElement('div');
    notification.className = this.type;
    notification.innerHTML = this.content;
    place.appendChild(notification);
};

function ToastNotification(type, content) {
    this.type = type;
    this.content = content;
    this.place = '.section-notifications';
    this.time = 1000; // 5s
};

ToastNotification.prototype = Object.create(Notification.prototype);

function ModalWindow() {
    this.content;
}

ModalWindow.prototype = Object.create(Notification.prototype);

var errorButton = document.querySelector('.error-button');
var warningButton = document.querySelector('.warning-button');
var successButton = document.querySelector('.success-button');
var infoButton = document.querySelector('.info-button');
var modalButton = document.querySelector('.modal-button');

errorButton.onclick = function() {
    var error = new ToastNotification('error-notification notification',
        '<i class="fas fa-times"></i><h4>Error</h4><i class="far fa-times-circle"></i>');
    error.showNotification();
    setTimeout(removeToast, error.time, document.querySelector(error.place).lastChild);
}

warningButton.onclick = function() {
    var warning = new ToastNotification('warning-notification notification',
        '<i class="fas fa-exclamation-triangle"></i><h4>Warning</h4><i class="far fa-times-circle"></i>');
    warning.showNotification();
    setTimeout(removeToast, warning.time, document.querySelector(warning.place).lastChild);
}

successButton.onclick = function() {
    var success = new ToastNotification('success-notification notification',
        '<i class="fas fa-check"></i><h4>Success</h4><i class="far fa-times-circle"></i>');
    success.showNotification();
    setTimeout(removeToast, success.time, document.querySelector(success.place).lastChild);
}

infoButton.onclick = function() {
    var info = new ToastNotification('info-notification notification',
        '<i class="fas fa-info"></i><h4>Info</h4><i class="far fa-times-circle"></i>');
    info.showNotification();
    setTimeout(removeToast, info.time, document.querySelector(info.place).lastChild);
}

modalButton.onclick = function() {
    var modal = document.createElement('div');
    modal.className = 'modal';
    var closeButton = document.querySelector(".close-button");

    document.querySelector('main').appendChild(modal);

    // function toggleModal() {
    //     modal.classList.toggle("show-modal");
    // }
    // toggleModal();
    // window.onclick = function(event) {
    //     if (event.target === modal) {
    //         toggleModal();
    //     }
    // }
    // closeButton.onclick = toggleModal;
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