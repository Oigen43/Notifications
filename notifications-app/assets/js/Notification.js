var Notification = (function() {
    function Notification(content, type, place) {
        this.content = content,
        this.type = type,
        this.place = place
    }
    
    Notification.prototype.showNotification = function() {
        var place = document.querySelector(this.place);
        var notification = document.createElement('div');
        notification.className = this.type;
        notification.innerHTML = this.content;
        place.appendChild(notification);
    };
    
    return {
        getNotificationClass: function() {
            return Notification;
        },
        getNotificationPrototype: function() {
            return Notification.prototype;
        }
    }
})();
