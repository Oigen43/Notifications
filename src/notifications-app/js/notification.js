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
    
    function _importApp(src) {
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
        importApp: function() {
            _importApp('src/notifications-app/js/consts.js');
            _importApp('src/notifications-app/js/toastNotification.js');
            _importApp('src/notifications-app/js/modalWindow.js');
        }
    }
})();
