var ModalWindow = (function() {
    function ModalWindow() {
        Notification.getNotificationClass().apply(this, arguments);
        this.type = 'modal-content',
        this.place = '.modal';
    }
    
    ModalWindow.prototype = Object.create(Notification.getNotificationPrototype());

    var _modal = document.querySelector('.modal');

    function _removeModal() {
        _toggleModal();
        _modal.removeChild(_modal.firstChild);
    }

    function _toggleModal() {
        _modal.classList.toggle(Consts.get('MODAL_SECOND_STATE'));
    }

    function _checkClosing(target) {
        if (target.className === Consts.get('MODAL_SECOND_STATE_NAME') || target.className === Consts.get('MODAL_CLOSE_BUTTON_NAME')) {
            _removeModal();
        }
    }
    
    function _create(modalContent) {
        var modal = new ModalWindow(modalContent);
        modal.showNotification();
        _toggleModal();
    }

    return {
      createModal: function (modalContent) {
          _create(modalContent);
      },
      checkClosing: function(target) {
          _checkClosing(target);
      }
    }
})();
