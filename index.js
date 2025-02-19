const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('Scan this QR code to log in:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', async msg => {
    if (msg.body.toLowerCase() === 'مرحبا') {
        msg.reply('أهلاً وسهلاً! كيف يمكنني مساعدتك؟');
    }
});

client.initialize();
