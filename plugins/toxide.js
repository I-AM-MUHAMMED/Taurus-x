const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by muhammed
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:MUHAMMED [OWNER]\n' // full name
            + 'ORG:MUHAMMED;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=919961050829:+919961050829\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "MUHAMMED [OWNER]", vcard: vcard}, MessageType.contact)
}))
