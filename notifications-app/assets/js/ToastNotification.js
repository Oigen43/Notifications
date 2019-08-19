var ToastNotification = (function() {
    function ToastNotification() {
        Notification.getNotificationClass().apply(this, arguments);
        this.place = '.section-notifications'
    };
    
    ToastNotification.prototype = Object.create(Notification.getNotificationPrototype());
  
    function _removeToast(toast) {
      _toggleToast(toast);
      setTimeout(function(){ toast.remove() }, Consts.get('TOAST_ANIMATION_DELAY'));
  }

    function _toggleToast(toast) {
        toast.classList.toggle(Consts.get('TOAST_SECOND_STATE'));
    }

    function _checkClosing(target) {
        if (target.className === Consts.get('TOAST_CLOSE_BUTTON_NAME')) {
            _removeToast(target.parentNode.parentNode);
        }
    }

    function _create(toastType, toastContent) {
        var toast = new ToastNotification(toastType, toastContent);
        toast.showNotification();
        var currentToast = document.querySelector(toast.place).lastChild;
        setTimeout(_toggleToast, Consts.get('TOAST_ANIMATION_DELAY'), currentToast);
        setTimeout(_removeToast, Consts.get('TOAST_TIMER'), currentToast);
    }

    return {
      createToast: function (toastType, toastContent) {
        _create(toastType, toastContent);
      },
      checkClosing: function(target) {
        _checkClosing(target);
      },
    };
})();
