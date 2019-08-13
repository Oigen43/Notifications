function Notification() {
}

Notification.prototype.showNotification = function() {
    var notificationsList = document.querySelector('.section-notifications');
    var notification = document.createElement('div');
    notification.className = this.type;
    notification.innerHTML = this.content;
    notificationsList.appendChild(notification);
};

function ToastNotification(type, content) {
    this.type = type;
    this.content = content;
    this.time = 5;
};

ToastNotification.prototype = Object.create(Notification.prototype);

var errorButton = document.querySelector('.error-button');
var warningButton = document.querySelector('.warning-button');
var successButton = document.querySelector('.success-button');
var infoButton = document.querySelector('.info-button');

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