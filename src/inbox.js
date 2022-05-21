const { MessageStore } = require("./message_store");

const Inbox = {

    render: function() {
        var message = document.createElement('ul');
        let innerMessage = MessageStore.getInboxMessages();
        innerMessage.forEach((piece) => {
            message.innerHTML += this.renderMessage(piece);
        })
        return message;
    },

    renderMessage: function(message) {
        li = document.createElement('li');
        li.className = "message";
        li.innerHTML = `<span class=from>${message.from}</span><span class=subject>${message.subject}</span><span class=body>${message.body}</span>`
        return li.outerHTML;
    }
}

module.exports = Inbox;