function ToastNotification(type, content) { // child class of Notification for generating toast notifications 
    this.type = type,
    this.content = content,
    this.place = '.section-notifications',
    this.time = 5000; // 5s
};

ToastNotification.prototype = Object.create(Notification.prototype);
