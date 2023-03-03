const telegramBot = require('node-telegram-bot-api');
const token = '5715595524:AAF1ghMazwqnFVP97IdJYfsHV3lURuHHmy4';
const ytdl = require('ytdl-core');
const fs = require('fs');

const bot = new telegramBot(token, {polling: true});

bot.on('message', (msg) => {
    if(msg.text === '/start') {
        let chatId = msg.chat.id;
        let full_name = msg.from.first_name;
        let userName = msg.from.username;
        bot.sendMessage(chatId, `Благодарим <b>${full_name}</b> за Ваш выбор, оставайтесь с нами`, {
        parse_mode: 'HTML'
        });
    }
});




