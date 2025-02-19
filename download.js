module.exports = {
    name: '!تحميل',
    execute: (msg, args) => {
        if (!args[0]) return msg.reply('❌ يرجى إدخال رابط الفيديو!');
        msg.reply('جارٍ تحميل الفيديو...');
        // هنا يتم تنفيذ كود تحميل الفيديو وإرساله للمستخدم
    }
};
