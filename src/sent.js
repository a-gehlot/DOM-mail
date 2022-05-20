const MessageStore = require("./message_store");

const Sent = {
    render: function () {
        var message = document.createElement('ul');
        let innerMessage = MessageStore.getSentMessages();
        innerMessage.forEach((piece) => {
            message.innerHTML += this.renderMessage(piece);
        })
        return message;
    },

    renderMessage: function (message) {
        li = document.createElement('li');
        li.className = "message";
        li.innerHTML = `<span class=to>${message.to}</span><span class=subject>${message.subject}</span><span class=body>${message.body}</span>`
        return li.outerHTML;
    }
}

module.exports = Sent;