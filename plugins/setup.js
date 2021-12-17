const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://bit.ly/3DOgLpP";
  r_text[1] = "https://bit.ly/3cwa8fv";   


    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭────────────────────╮
   ` + config.BOTV2 + `
╰────────────────────╯
╭────────────────────╮
│
│ ʜᴇʏ ᴜsᴇʀ ` + wish + `
│         *⌚` + time + `*
│
┣𝕾⃝🌺 *ᴅᴇᴠᴇʟᴏʟᴇʀ* : ` + Config.OWNER + `
┣𝕾⃝🌺 *ʙᴏᴛ* : ` + config.BOTV2 + `
┣𝕾⃝🌺 *ᴠᴇʀsɪᴏɴ* : 2.0.0
┣𝕾⃝🌺 *ғᴜʟʟ ᴇᴠᴀ* : ` + taurus + `
┣𝕾⃝🌺 *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
┣𝕾⃝🌺 *ᴘʀᴇғɪx* : *. ; !*
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©919961050829
│
│
│☘︎ *ᴛᴏ ᴄʜᴇᴄᴋ ᴜᴘᴅᴀᴛᴇ ᴛʏᴘᴇ .ᴜᴘᴅᴀᴛᴇ*
│
│
│
│☘︎ *ʜᴏᴡ ᴛᴏ ᴜᴘᴅᴀᴛᴇ .ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ*
│
│
│
│☘︎ *ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ʙᴏᴛ : 
│ *https://t.ly/TGSb*
│
│
│
│☘︎ *ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ʜᴇʀᴏᴋᴜ ᴀᴄᴄᴏᴜɴᴛ : 
│ *https://t.ly/coJ1*
│
│
│
│☘︎ *ɢɪᴛʜᴜʙ ʟɪɴᴋ :*
│ *https://bit.ly/30GcHJS*
│
│
│
│☘︎ *ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅs :*
│ *https://t.ly/oRpx*
│
│
│
│☘︎ *sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs :* 
│ *https://t.ly/ppzA*
│
│
│
│☘︎ *ᴡʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ :*
│ *https://bit.ly/3mcXDeb*
│
│
│
│☘︎ *ᴏᴡɴᴇʀ :*
│ *https://bit.ly/3dZkOUC*
│
│ 
│    ❏᪥ᴍᴜʜᴀᴍᴍᴇᴅ᪥❏
╰────────────────────╯

`}) 

}));
