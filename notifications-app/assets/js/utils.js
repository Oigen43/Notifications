var Utils = (function() {

    var BUTTON_CLASS_NAME = {
        error : '.error-button',
        warning : '.warning-button',
        success : '.success-button',
        info : '.info-button',
        modal : '.modal-button'    
    };

    var PRIVATE = {
        toastsSectionClassName : '.section-notifications'
    };

    return {
       getNodeDomBySelector: function(name) { return document.querySelector(PRIVATE[name]); },
       getButtonNodeDomBySelector: function(name) { return document.querySelector(BUTTON_CLASS_NAME[name]); }
   };
})();
