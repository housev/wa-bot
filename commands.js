module.exports = {
    name: '!الاوامر',
    execute: (msg) => {
        msg.reply('📌 **قائمة الأوامر:**\n\n' +
                  '🎮 *ألعاب:*\n- `!لعبة`\n- `!لغز`\n\n' +
                  '🎭 *تسلية:*\n- `!نكتة`\n- `!اقتباس`\n\n' +
                  '📥 *تحميل:*\n- `!تحميل رابط`\n\n' +
                  '🏮 *أنمي:*\n- `!انمي اسم`\n- `!شخصية اسم`\n\n' +
                  '💍 *زواج:*\n- `!تزوج`\n\n' +
                  '⚡ *إدارية:*\n- `!طرد @الشخص`\n- `!كتم @الشخص`\n');
    }
};
