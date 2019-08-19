var App = (function() {

    Selectors.get('ERROR_BUTTON').onclick = function() {
        ToastNotification.createToast(Consts.get('TOAST_ERROR_CONTENT'), Consts.get('TOAST_ERROR_TYPE'));
    }

    Selectors.get('WARNING_BUTTON').onclick = function() {
        ToastNotification.createToast(Consts.get('TOAST_WARNING_CONTENT'), Consts.get('TOAST_WARNING_TYPE'));
    }

    Selectors.get('SUCCES_BUTTON').onclick = function() {
        ToastNotification.createToast(Consts.get('TOAST_SUCCESS_CONTENT'), Consts.get('TOAST_SUCCESS_TYPE'),);
    }
    
    Selectors.get('INFO_BUTTON').onclick = function() {
        ToastNotification.createToast(Consts.get('TOAST_INFO_CONTENT'), Consts.get('TOAST_INFO_TYPE'));
    }

    Selectors.get('MODAL_BUTTON').onclick = function() {
        ModalWindow.createModal(Consts.get('MODAL_CONTENT'));
        window.onclick = function(event) {
            ModalWindow.checkClosing(event.target);
        }
    }

    Selectors.get('TOASTS_SECTION').onclick = function(event) {
        ToastNotification.checkClosing(event.target);
    }
})();
