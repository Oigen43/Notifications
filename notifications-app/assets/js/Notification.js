var Notification = (function() {
    function Notification(inner, className, parentContainerSelector) {
        this.inner = inner,
        this.className = className,
        this.parentContainerSelector = parentContainerSelector
    }
    
    Notification.prototype.showNotification = function() {
        var place = document.querySelector(this.parentContainerSelector);
        var notification = document.createElement('div');
        notification.className = this.className;
        notification.innerHTML = this.inner;
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
