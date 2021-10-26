
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(reply,alpha,id) => {
	alpha = new WAConnection()
    alpha.logger.level = 'warn'
    alpha.version = [2, 2123, 8]
    alpha.browserDescription = [ 'jadibot', '', '3.0' ]
    alpha.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await alpha.sendMessage(id,buffer,MessageType.image,{caption:'Scan QR Untuk menjadi bot\n*Rules:*\nQR akan diganti setiap 30 detik'})
    	setTimeout(() => {
       	alpha.deleteMessage(id, bot.key)
       },30000)
    })
    alpha.on('connecting', () => {
    })
    alpha.on('open', () => {
    	reply(`Sukses Jadi Bot\n\n*Device*:\n\n ${JSON.stringify(alpha.user,null,2)}`)
    })
    await alpha.connect({timeoutMs: 30 * 1000})
    listjadibot.push(alpha.user)
    alpha.on('chat-update', async (message) => {
        require('../index.js')(alpha, message)
    })
}

const stopjadibot = (reply) => {
	alpha = new WAConnection();
	alpha.close()
	reply('Sukses stop jadibot')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}