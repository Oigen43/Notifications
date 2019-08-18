var ToastNotification = (function() {
    
    function ToastNotification(type, content) {
        this.type = type,
        this.content = content,
        this.place = '.section-notifications'
    };
    
    ToastNotification.prototype = Object.create(Notification.prototype);
  
    return {
      createToast: function (toastType, toastContent) {
        var toast = new ToastNotification(toastType, toastContent);
        toast.showNotification();
        var currentToast = document.querySelector(toast.place).lastChild;
        return currentToast;
      }
    };
})();
