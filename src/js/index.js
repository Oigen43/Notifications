var App = (function() {

    Utils.getButtonNodeDomBySelector('error').onclick = function() {
        ToastNotification.create('error', 'your message');
    }

    Utils.getButtonNodeDomBySelector('warning').onclick = function() {
        ToastNotification.create('warning');    }

    Utils.getButtonNodeDomBySelector('success').onclick = function() {
        ToastNotification.create('success');    }
    
    Utils.getButtonNodeDomBySelector('info').onclick = function() {
        ToastNotification.create('info');    }

    Utils.getButtonNodeDomBySelector('modal').onclick = function() {
        ModalWindow.create('<img class="js-logo" src="src/assets/logo.svg" alt="js-logo"><i class="far fa-times-circle modal-close-button"></i>');
        window.onclick = function(event) {
            ModalWindow.verificateClosing(event.target);
        }
    }

    Utils.getNodeDomBySelector('toastsSectionClassName').onclick = function(event) {
        ToastNotification.verificateClosing(event.target);
    }
})();
