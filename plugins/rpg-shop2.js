const xpperlimit=0x32;let handler=async(_0x51e43b,{conn:_0x741de3,command:_0x4b89f4,args:_0x51b0a2})=>{let _0x5be270=_0x4b89f4['replace'](/^buy/i,'');_0x5be270=_0x5be270?/all/i['test'](_0x5be270)?Math['floor'](global['db']['data']['users'][_0x51e43b['sender']]['money']/xpperlimit):parseInt(_0x5be270):_0x51b0a2[0x0]?parseInt(_0x51b0a2[0x0]):0x1,_0x5be270=Math['max'](0x1,_0x5be270);if(global['db']['data']['users'][_0x51e43b['sender']]['money']>=xpperlimit*_0x5be270)global['db']['data']['users'][_0x51e43b['sender']]['money']-=xpperlimit*_0x5be270,global['db']['data']['users'][_0x51e43b['sender']]['limit']+=_0x5be270,_0x741de3['reply'](_0x51e43b['chat'],'\x0a乂✰payment\x20note\x20✰乂\x0a乂✰\x20You\x20have\x20bought\x20:\x20+\x20'+_0x5be270+'💎\x20\x0a乂✰\x20you\x20have\x20spent\x20:\x20-'+xpperlimit*_0x5be270+'\x20ʜᴀᴅᴇs-ᴄᴏɪɴs',_0x51e43b);else _0x741de3['reply'](_0x51e43b['chat'],'❎\x20you\x20do\x20not\x20have\x20the\x20necessary\x20resources\x20to\x20buy*'+_0x5be270+'*\x20Diamantes💎',_0x51e43b);};handler['help']=['bus','busyall'],handler['tags']=['money'],handler['command']=['bus','busyall'],handler['register']=!![],handler['disabled']=![];export default handler;