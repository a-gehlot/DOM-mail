const Inbox = {

    render: function() {
        var message = document.createElement('ul');
        message.innerHTML = "An Inbox Message";
        return message;
    }
}

module.exports = Inbox;