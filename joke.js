module.exports = {
    name: '!نكتة',
    execute: (msg) => {
        const jokes = ['😂 لماذا لا يلعب النمل الكرة؟ لأنه يخاف من صفارة الحكم!', 
                       '🤣 المدرس: لماذا تأخرت؟ الطالب: حلمت أنني في المدرسة وانتظرت حتى انتهى الحلم!'];
        msg.reply(jokes[Math.floor(Math.random() * jokes.length)]);
    }
};
