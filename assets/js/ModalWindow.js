function ModalWindow(content) { // child class of Notification for generating modal window
    this.type = 'modal-content',
    this.content = content,
    this.place = '.modal';
}

ModalWindow.prototype = Object.create(Notification.prototype);
