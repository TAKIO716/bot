let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK\nSaya SQUATBOTZBotz`\nPilih Menu Di Bawah Yaa\n",
                        "description": "*Error? Chat me wa.me/6289616061778*",
                        "buttonText": "CLICK HERE",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": "SimpleMenu",
                                        "description": "\nIni Yg button",
                                        "rowId": ".smenu1",
                                    },{
                                        "title": "SimpleMenu",
                                        "description": "\nIni Yg ngetik",
                                        "rowId": ".smenu2", 
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu1']
handler.register = true
module.exports = handler
