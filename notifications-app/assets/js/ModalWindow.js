var ModalWindow = (function() {
    function ModalWindow() {
        Notification.getNotificationClass().apply(this, arguments);
        this.className = 'modal',
        this.parentContainerSelector = '.modal-wrapper';
    }
    
    ModalWindow.prototype = Object.create(Notification.getNotificationPrototype());

    var _modalWrapper = document.querySelector('.modal-wrapper');

    function _removeModal() {
        _toggleModal();
        _modalWrapper.removeChild(_modalWrapper.firstChild);
    }

    function _toggleModal() {
        _modalWrapper.classList.toggle(Consts.get('modalStartingAnimationClassName'));
    }

    function _verificateClosing(target) {
        if (target.className === Consts.get('openedModalBackgroundClassName') || target.className === Consts.get('modalCloseButtonClassName')) {
            _removeModal();
        }
    }
    
    function _create(modalInner) {
        var modal = new ModalWindow(modalInner);
        modal.showNotification();
        _toggleModal();
    }

    return {
        create: function (modalInner) {
          _create(modalInner);
      },
        verificateClosing: function(target) {
          _verificateClosing(target);
      }
    }
})();
