var Consts = (function() {

    var TOAST_TYPE_CLASS_NAME = {
        error : 'error-notification notification',
        warning : 'warning-notification notification',
        success : 'success-notification notification',
        info : 'info-notification notification'
    };

    var BASIC_TOAST_MESSAGE = {
        error : 'Something is wrong',
        warning : 'Something is not ordinary',
        success : 'Everything is fine',
        info : 'Additional information'
    };

    var TOAST_INNER_HTML = {
        error : '<div class="notification-content"><i class="fas fa-times"></i><div class = "notification-info"><h4>Error</h4></div><i class="far fa-times-circle"></i></div>',
        warning : '<div class="notification-content"><i class="fas fa-exclamation-triangle"></i><div class = "notification-info"><h4>Warning</h4></div><i class="far fa-times-circle"></i></div>',
        success : '<div class="notification-content"><i class="fas fa-check"></i><div class = "notification-info"><h4>Success</h4></div><i class="far fa-times-circle"></i></div>',
        info : '<div class="notification-content"><i class="fas fa-info"></i><div class = "notification-info"><h4>Info</h4></div><i class="far fa-times-circle"></i></div>'
    };

    var PRIVATE = {
        toastCloseButtonClassName : 'far fa-times-circle',
        modalCloseButtonClassName : 'far fa-times-circle modal-close-button',
    
        toastStartingAnimationClassName : 'show-notification',
        modalStartingAnimationClassName : 'show-modal',
    
        openedModalBackgroundClassName : 'modal-wrapper show-modal',
    
        toastAnimationDelay : 250,
        toastNotificationDuration: 5000
    };

    return {
       getPrivate: function(name) { return PRIVATE[name]; },
       getToastTypeClassName: function(name) { return TOAST_TYPE_CLASS_NAME[name]; },
       getBasicToastMessage: function(name) { return BASIC_TOAST_MESSAGE[name]; },
       getToastInner: function(name) { return TOAST_INNER_HTML[name]; }
   };
})();
