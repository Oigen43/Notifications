var Consts = (function() {
    var private = {
        'TOAST_ERROR_TYPE' : 'error-notification notification',
        'TOAST_WARNING_TYPE' : 'warning-notification notification',
        'TOAST_SUCCESS_TYPE' : 'success-notification notification',
        'TOAST_INFO_TYPE' : 'info-notification notification',
    
        'TOAST_ERROR_CONTENT' : '<div class="notification-content"><i class="fas fa-times"></i><div class = "notification-info"><h4>Error</h4><p>Something is wrong</p></div><i class="far fa-times-circle"></i></div>',
        'TOAST_WARNING_CONTENT' : '<div class="notification-content"><i class="fas fa-exclamation-triangle"></i><div class = "notification-info"><h4>Warning</h4><p>Something is not ordinary</p></div><i class="far fa-times-circle"></i></div>',
        'TOAST_SUCCESS_CONTENT' : '<div class="notification-content"><i class="fas fa-check"></i><div class = "notification-info"><h4>Success</h4><p>Everything is fine</p></div><i class="far fa-times-circle"></i></div>',
        'TOAST_INFO_CONTENT' : '<div class="notification-content"><i class="fas fa-info"></i><div class = "notification-info"><h4>Info</h4><p>Additional information</p></div><i class="far fa-times-circle"></i></div>', 
 
        'MODAL_CONTENT' : '<img class="js-logo" src="assets/logo.svg" alt="js-logo"><i class="far fa-times-circle modal-close-button"></i>',
    
        'TOAST_CLOSE_BUTTON_NAME' : 'far fa-times-circle',
        'MODAL_CLOSE_BUTTON_NAME' : 'far fa-times-circle modal-close-button',
    
        'TOAST_SECOND_STATE' : 'show-notification',
        'MODAL_SECOND_STATE' : 'show-modal',
    
        'MODAL_SECOND_STATE_NAME' : 'modal show-modal',
    
        'TOAST_ANIMATION_DELAY' : 250,
        'TOAST_TIMER' : 5000
    };

    return {
       get: function(name) { return private[name]; }
   };
})();
