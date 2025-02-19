module.exports = {
    name: '!تزوج',
    execute: async (msg) => {
        const chat = await msg.getChat();
        let members = chat.participants;
        let person1 = members[Math.floor(Math.random() * members.length)].id.user;
        let person2 = members[Math.floor(Math.random() * members.length)].id.user;
        msg.reply(`💍 تهانينا! @${person1} تزوج @${person2} 🎉`, { mentions: [person1, person2] });
    }
};
