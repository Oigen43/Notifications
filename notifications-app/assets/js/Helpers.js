var Helpers = function() {
    return {
        removeToast : function(toast) {
            toggleToast(toast);
            setTimeout(function(){ toast.remove() }, Consts.get('TOAST_ANIMATION_DELAY'));
        },
    
        toggleToast : function(toast) {
            toast.classList.toggle(Consts.get('TOAST_SECOND_STATE'));
        },
    
        removeModal : function(modal) {
            toggleModal(modal);
            modal.removeChild(modal.firstChild);
        },
    
        toggleModal : function(modal) {
            modal.classList.toggle(Consts.get('MODAL_SECOND_STATE'));
        },
    
        toastCreater : function(toastType, toastContent) {
            var currentToast = ToastNotification.createToast(toastType, toastContent);
            setTimeout(toggleToast, Consts.get('TOAST_ANIMATION_DELAY'), currentToast);
            setTimeout(removeToast, Consts.get('TOAST_TIMER'), currentToast);
        }
    }
}