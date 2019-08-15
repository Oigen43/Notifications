(function Main() {  // logic

    // constants

    var TOAST_ERROR_TYPE = 'error-notification notification';
    var TOAST_WARNING_TYPE = 'warning-notification notification';
    var TOAST_SUCCESS_TYPE = 'success-notification notification';
    var TOAST_INFO_TYPE = 'info-notification notification';

    var TOAST_ERROR_CONTENT = '<div class="notification-content"><i class="fas fa-times"></i><h4>Error</h4><i class="far fa-times-circle"></i></div>';
    var TOAST_WARNING_CONTENT = '<div class="notification-content"><i class="fas fa-exclamation-triangle"></i><h4>Warning</h4><i class="far fa-times-circle"></i></div>';
    var TOAST_SUCCESS_CONTENT = '<div class="notification-content"><i class="fas fa-check"></i><h4>Success</h4><i class="far fa-times-circle"></i></div>';
    var TOAST_INFO_CONTENT = '<div class="notification-content"><i class="fas fa-info"></i><h4>Info</h4><i class="far fa-times-circle"></i></div>';
    var MODAL_CONTENT = '<img class="js-logo" src="assets/logo.svg" alt="js-logo"><i class="far fa-times-circle modal-close-button"></i>';

    var TOAST_CLOSE_BUTTON_NAME = 'far fa-times-circle';
    var MODAL_CLOSE_BUTTON_NAME = 'far fa-times-circle modal-close-button';

    var TOAST_SECOND_STATE = 'show-notification';
    var MODAL_SECOND_STATE = 'show-modal';

    var MODAL_SECOND_STATE_NAME = 'modal show-modal';

    var TOAST_ANIMATION_DELAY = 250;

    // selectors

    var errorButton = document.querySelector('.error-button');
    var warningButton = document.querySelector('.warning-button');
    var successButton = document.querySelector('.success-button');
    var infoButton = document.querySelector('.info-button');
    var modalButton = document.querySelector('.modal-button');
    var toastsSection = document.querySelector('.section-notifications');
    var modalType = document.querySelector('.modal');

    // event handlers

    errorButton.onclick = function() {
        var error = new ToastNotification(TOAST_ERROR_TYPE, TOAST_ERROR_CONTENT);
        error.showNotification();
        var currentErrorToast = document.querySelector(error.place).lastChild;
        setTimeout(toggleToast, TOAST_ANIMATION_DELAY, currentErrorToast);  // animation
        setTimeout(removeToast, error.time, currentErrorToast);  // deleting toast
    }

    warningButton.onclick = function() {
        var warning = new ToastNotification(TOAST_WARNING_TYPE, TOAST_WARNING_CONTENT);
        warning.showNotification();
        var currentWarningToast = document.querySelector(warning.place).lastChild;
        setTimeout(toggleToast, TOAST_ANIMATION_DELAY, currentWarningToast);  // animation
        setTimeout(removeToast, warning.time, currentWarningToast);  // deleting toast
    }

    successButton.onclick = function() {
        var success = new ToastNotification(TOAST_SUCCESS_TYPE, TOAST_SUCCESS_CONTENT);
        success.showNotification();
        var currentSuccessToast = document.querySelector(success.place).lastChild;
        setTimeout(toggleToast, TOAST_ANIMATION_DELAY, currentSuccessToast);  // animation
        setTimeout(removeToast, success.time, currentSuccessToast);  // deleting toast
    }

    infoButton.onclick = function() {
        var info = new ToastNotification(TOAST_INFO_TYPE, TOAST_INFO_CONTENT);
        info.showNotification();
        var currentInfoToast = document.querySelector(info.place).lastChild;
        setTimeout(toggleToast, TOAST_ANIMATION_DELAY, currentInfoToast);  // animation
        setTimeout(removeToast, info.time, currentInfoToast);  // deleting toast
    }

    modalButton.onclick = function() {
        var modal = new ModalWindow(MODAL_CONTENT);
        modal.showNotification();
        toggleModal(modalType);  // animation
        window.onclick = function(event) {  // event handler for closing modal
            if (event.target.className === MODAL_SECOND_STATE_NAME || event.target.className === MODAL_CLOSE_BUTTON_NAME) { // check in what place we clicked
                removeModal(modalType);
            }
        }
    }

    toastsSection.onclick = function(event) {  // event handler for closing toasts using destructuring to know what toast to delete
        var target = event.target;
        if (target.className !== TOAST_CLOSE_BUTTON_NAME) return;
        removeToast(target.parentNode.parentNode);
    }

    function removeToast(toast) {  // helper for deleting toasts
        toggleToast(toast);
        setTimeout(function(){ toast.remove() }, TOAST_ANIMATION_DELAY);
    }

    function toggleToast(toast) {  // helper for changing toast state for starting animation
        toast.classList.toggle(TOAST_SECOND_STATE);
    }

    function removeModal(modal) {  // helper for deleting(hiding) modal
        toggleModal(modal);
        modal.removeChild(modal.firstChild);
    }

    function toggleModal(modal) { // helper for changing modal state for starting animation
        modal.classList.toggle(MODAL_SECOND_STATE);
    }
})();
