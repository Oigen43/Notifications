var ModalWindow = (function() {
    
    function ModalWindow(content) {
        this.type = 'modal-content',
        this.content = content,
        this.place = '.modal';
    }
    
    ModalWindow.prototype = Object.create(Notification.prototype);
  
    function _create(modalContent) {
        var modal = new ModalWindow(modalContent);
        modal.showNotification();
    }

    return {
      createModal: function (modalContent) {
          _create(modalContent);
      }
    }
})();
