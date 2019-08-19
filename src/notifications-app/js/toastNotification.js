var ToastNotification = (function() {
    function ToastNotification() {
        Notification.getNotificationClass().apply(this, arguments);
        this.parentContainerSelector = '.section-notifications',
        this.duration = 500000
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

    function _addMesage(currentToast, toastType, toastMessage) {
      if (!toastMessage) { toastMessage = Consts.getBasicToastMessage(toastType); }
      var toastMessageNode = document.createElement('p');
      toastMessageNode.innerHTML = toastMessage;
      currentToast.firstChild.children[1].appendChild(toastMessageNode);
    }

    function _create(toastType, toastMessage) {
        var toast = new ToastNotification(Consts.getToastInner(toastType), Consts.getToastTypeClassName(toastType));
        toast.showNotification();

        var currentToast = document.querySelector(toast.parentContainerSelector).lastChild;
        _addMesage(currentToast, toastType, toastMessage);

        setTimeout(_toggleToast, Consts.get('toastAnimationDelay'), currentToast);
        setTimeout(_removeToast, toast.duration, currentToast);
    }

    return {
      create: function (toastType, toastMessage) {
        _create(toastType, toastMessage);
      },
      verificateClosing: function(target) {
        _verificateClosing(target);
      }
    };
})();
