var ToastNotification = (function() {
    function ToastNotification() {
        Notification.getNotificationClass().apply(this, arguments);
        this.parentContainerSelector = '.section-notifications',
        this.duration = 5000
    };
    
    ToastNotification.prototype = Object.create(Notification.getNotificationPrototype());
  
    function _removeToast(toast) {
      _toggleToast(toast);
      setTimeout(function(){ toast.remove() }, Consts.get('toastAnimationDelay'));
  }

    function _toggleToast(toast) {
        toast.classList.toggle(Consts.get('toastStartingAnimationClassName'));
    }

    function _verificateClosing(target) {
        if (target.className === Consts.get('toastCloseButtonClassName')) {
            _removeToast(target.parentNode.parentNode);
        }
    }

    function _create(toastInner, toastClassName) {
        var toast = new ToastNotification(toastInner, toastClassName);
        toast.showNotification();
        var currentToast = document.querySelector(toast.parentContainerSelector).lastChild;
        setTimeout(_toggleToast, Consts.get('toastAnimationDelay'), currentToast);
        setTimeout(_removeToast, toast.duration, currentToast);
    }

    return {
      create: function (toastInner, toastClassName) {
        _create(toastInner, toastClassName);
      },
      verificateClosing: function(target) {
        _verificateClosing(target);
      }
    };
})();
