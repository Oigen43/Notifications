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
    
    function _init(src) {
        var script = document.createElement('script');
        script.src = src;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    return {
        getNotificationClass: function() {
            return Notification;
        },
        getNotificationPrototype: function() {
            return Notification.prototype;
        },
        init: function() {
            _init('src/notifications-app/consts.js');
            _init('src/notifications-app/toastNotification.js');
            _init('src/notifications-app/modalWindow.js');
        }
    }
})();
