var Selectors = (function() {
    var private = {
        'ERROR_BUTTON' : '.error-button',
        'WARNING_BUTTON' : '.warning-button',
        'SUCCES_BUTTON' : '.success-button',
        'INFO_BUTTON' : '.info-button',
        'MODAL_BUTTON' : '.modal-button',
        'TOASTS_SECTION' : '.section-notifications'
    };

    return {
       get: function(name) { return document.querySelector(private[name]); }
   };
})();
