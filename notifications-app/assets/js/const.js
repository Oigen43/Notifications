var Consts = (function() {

    var TOAST_TYPE_CLASS_NAME = {
        error : 'error-notification notification',
        warning : 'warning-notification notification',
        success : 'success-notification notification',
        info : 'info-notification notification'
    };

    var TOAST_INNER = {
        error : '<div class="notification-content"><i class="fas fa-times"></i><div class = "notification-info"><h4>Error</h4><p>Something is wrong</p></div><i class="far fa-times-circle"></i></div>',
        warning : '<div class="notification-content"><i class="fas fa-exclamation-triangle"></i><div class = "notification-info"><h4>Warning</h4><p>Something is not ordinary</p></div><i class="far fa-times-circle"></i></div>',
        success : '<div class="notification-content"><i class="fas fa-check"></i><div class = "notification-info"><h4>Success</h4><p>Everything is fine</p></div><i class="far fa-times-circle"></i></div>',
        info : '<div class="notification-content"><i class="fas fa-info"></i><div class = "notification-info"><h4>Info</h4><p>Additional information</p></div><i class="far fa-times-circle"></i></div>'
    };

    var PRIVATE = {
        modalInner : '<img class="js-logo" src="assets/logo.svg" alt="js-logo"><i class="far fa-times-circle modal-close-button"></i>',
    
        toastCloseButtonClassName : 'far fa-times-circle',
        modalCloseButtonClassName : 'far fa-times-circle modal-close-button',
    
        toastStartingAnimationClassName : 'show-notification',
        modalStartingAnimationClassName : 'show-modal',
    
        openedModalBackgroundClassName : 'modal-wrapper show-modal',
    
        toastAnimationDelay : 250
    };

    return {
       get: function(name) { return PRIVATE[name]; },
       getToastTypeClassName: function(name) { return TOAST_TYPE_CLASS_NAME[name]; },
       getToastInner: function(name) { return TOAST_INNER[name]; }
   };
})();
