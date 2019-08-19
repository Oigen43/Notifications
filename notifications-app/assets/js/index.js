var App = (function() {

    Utils.getButtonNodeDomBySelector('error').onclick = function() {
        ToastNotification.create(Consts.getToastInner('error'), Consts.getToastTypeClassName('error'));
    }

    Utils.getButtonNodeDomBySelector('warning').onclick = function() {
        ToastNotification.create(Consts.getToastInner('warning'), Consts.getToastTypeClassName('warning'));
    }

    Utils.getButtonNodeDomBySelector('success').onclick = function() {
        ToastNotification.create(Consts.getToastInner('success'), Consts.getToastTypeClassName('success'));
    }
    
    Utils.getButtonNodeDomBySelector('info').onclick = function() {
        ToastNotification.create(Consts.getToastInner('info'), Consts.getToastTypeClassName('info'));
    }

    Utils.getButtonNodeDomBySelector('modal').onclick = function() {
        ModalWindow.create(Consts.get('modalInner'));
        window.onclick = function(event) {
            ModalWindow.verificateClosing(event.target);
        }
    }

    Utils.getNodeDomBySelector('toastsSectionClassName').onclick = function(event) {
        ToastNotification.verificateClosing(event.target);
    }
})();
