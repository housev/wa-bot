const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.on('qr', qr => {
    console.log('يرجى مسح هذا الـ QR لتسجيل الدخول:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ البوت متصل وجاهز للعمل!');
});

client.on('message', async msg => {
    if (msg.body.toLowerCase() === 'مرحبا') {
        msg.reply('أهلا وسهلا! 😊');
    }
});

client.initialize();
