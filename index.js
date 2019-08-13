function Notification(type) {
    this.type = type;
}

Notification.prototype.showNotification = function() {
    var notificationsList = document.querySelector('.section-notifications');
    var notification = document.createElement('div');
    notification.className = 'info-notification';
    notificationsList.appendChild(notification);
    alert(this.type);
};

function ToastNotification() {
    Notification.apply(this, arguments);
};

ToastNotification.prototype = Object.create(Notification.prototype);

var errorButton = document.querySelector('.error-button');

errorButton.onclick = function() {
    var error = new ToastNotification('error');
    error.showNotification();
}
