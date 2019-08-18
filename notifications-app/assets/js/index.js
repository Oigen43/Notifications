var App = (function() {

    var errorButton = document.querySelector('.error-button');
    var warningButton = document.querySelector('.warning-button');
    var successButton = document.querySelector('.success-button');
    var infoButton = document.querySelector('.info-button');
    var modalButton = document.querySelector('.modal-button');
    var toastsSection = document.querySelector('.section-notifications');
    var modalType = document.querySelector('.modal');

    errorButton.onclick = function() {
        toastCreater(Consts.get('TOAST_ERROR_TYPE'), Consts.get('TOAST_ERROR_CONTENT'));
    }

    warningButton.onclick = function() {
        toastCreater(Consts.get('TOAST_WARNING_TYPE'), Consts.get('TOAST_WARNING_CONTENT'));
    }

    successButton.onclick = function() {
        toastCreater(Consts.get('TOAST_SUCCESS_TYPE'), Consts.get('TOAST_SUCCESS_CONTENT'));

    }
    
    infoButton.onclick = function() {
        toastCreater(Consts.get('TOAST_INFO_TYPE'), Consts.get('TOAST_INFO_CONTENT'));
    }

    modalButton.onclick = function() {
        ModalWindow.createModal(Consts.get('MODAL_CONTENT'));
        toggleModal(modalType);
        window.onclick = function(event) {
            if (event.target.className === Consts.get('MODAL_SECOND_STATE_NAME') || event.target.className === Consts.get('MODAL_CLOSE_BUTTON_NAME')) {
                removeModal(modalType);
            }
        }
    }

    toastsSection.onclick = function(event) {
        var target = event.target;
        if (target.className !== Consts.get('TOAST_CLOSE_BUTTON_NAME')) return;
        removeToast(target.parentNode.parentNode);
    }

    function removeToast(toast) {
        toggleToast(toast);
        setTimeout(function(){ toast.remove() }, Consts.get('TOAST_ANIMATION_DELAY'));
    }

    function toggleToast(toast) {
        toast.classList.toggle(Consts.get('TOAST_SECOND_STATE'));
    }

    function removeModal(modal) {
        toggleModal(modal);
        modal.removeChild(modal.firstChild);
    }

    function toggleModal(modal) {
        modal.classList.toggle(Consts.get('MODAL_SECOND_STATE'));
    }

    function toastCreater(toastType, toastContent) {
        var currentToast = ToastNotification.createToast(toastType, toastContent);
        setTimeout(toggleToast, Consts.get('TOAST_ANIMATION_DELAY'), currentToast);
        setTimeout(removeToast, Consts.get('TOAST_TIMER'), currentToast);
    }
})();
