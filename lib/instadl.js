let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
alpha = new WAConnection()
const { getBuffer } = require("./help.js");
const axios = require("axios");

const downloadig = async(link, from, mek, prefix) => {
  try {
  var a = await axios.get(`https://megayaa.herokuapp.com/api/igdl?url=${link}`)
  var b = a.data.result
  var owner = a.data.owner
  var capt = a.data.caption
  b.forEach(async(res) => {
      if(res.type == 'jpg'){
        var c = await getBuffer(res.url)
        alpha.sendMessage(from, c, MessageType.image, {quoted: mek, caption: `Instagram Downloader\n\nOwner : ${owner}\n\nCaption : ${capt}\n\nType : ${res.type}`})
      } else {
        var d = await getBuffer(res.url)
        alpha.sendMessage(from, d, MessageType.video, {quoted: mek, caption: `Instagram Downloader\n\nOwner : ${owner}\n\nCaption : ${capt}\n\nType : ${res.type}` })
      }
    })
  } catch (e) {
    console.log(e)
    alpha.sendMessage(from, 'error, mungkin link tidak valid', MessageType.text)
  }
}

const igstory = async(username, from, mek, prefix) => {
  try {
    var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${username}`)
    var username = a.data.username
    var count = a.data.stories_count
    var b = a.data.data
    b.forEach(async(res) => {
      if(res.type == 'jpg'){
        var c = await getBuffer(res.url)
        alpha.sendMessage(from, c, MessageType.image)
      } else {
        var d = await getBuffer(res.url)
        alpha.sendMessage(from, d, MessageType.video)
      }
    })
  } catch (e) {
    console.log(e)
    alpha.sendMessage(from, 'error, mungkin link tidak valid', MessageType.text)
  }
}

module.exports = { downloadig, igstory }