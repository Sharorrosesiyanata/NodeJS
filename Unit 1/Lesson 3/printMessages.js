//require messages module (we can access the array)
const messagesModule = require("./messages");

messagesModule.messages.forEach(m =>
    console.log(m)
);