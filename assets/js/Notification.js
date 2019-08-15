function Notification() { // parent Class for other pop-ups
}

Notification.prototype.showNotification = function() { // basic method for adding pop-ups
    var place = document.querySelector(this.place);
    var notification = document.createElement('div');
    notification.className = this.type;
    notification.innerHTML = this.content;
    place.appendChild(notification);
};
