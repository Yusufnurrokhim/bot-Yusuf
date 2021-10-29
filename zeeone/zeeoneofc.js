const petik = '```'
const help = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)=> {
	return`┌❏ *INDONESIA TIME*
${petik}│◦➛ WIB : ${timuu}
│◦➛ WITA : ${wita}
└❏ WIT : ${wit}${petik}
                          
┌❏ *TODAY*
${petik}│◦➛${ucapannya2}
│◦➛Jam : ${timuu}
│◦➛Hari : ${thisDay}
└❏ Tanggal : ${ini_tanggal}${petik}

┌❏ *DEVICE*
${petik}│◦➛Whatsapp : ${wa_version}
│◦➛Merk HP : ${device_manufacturer}
│◦➛Versi HP : ${device_model}
│◦➛Versi OS : ${os_version}
│◦➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◦➛MCC : ${mcc}
└❏ MNC : ${mnc}${petik}

┌─❑「 *BOT INFO* 」
${petik}│◦➛ Owner : ${ownername}
│◦➛Mode : ${status}
│◦➛Prefix : ${prefix}
│◦➛Total Hit : ${hit_today.length}
│◦➛Personal Chat : ${totalchat.length - ini_gcchat.lenght}
│◦➛Total All Chat : ${totalchat.length}
│◦➛Group Chat : ${ini_gcchat}
│◦➛Browser : Chrome
│◦➛Server : Baileys
│◦➛Version : 3.5.2${petik}
${petik}│◦➛Speed :${petik} ${latensiii} 
${petik}└❏ ${tekss}${petik}


┌❑ *LIST MENU* ❑
│
${petik}├❒ Allmenu 
├❒ Convertmenu
├❒ Asupanmenu
├❒ Downloadmenu
├❒ Funmenu
├❒ Makermenu
├❒ Othermenu
├❒ Ownermenu
├❒ Storagemenu
├❒ Tagmenu
├❒ Upmenu
├❒ Set_sticker_cmd
├❒ Gacha_cecan
├❒ Telegram_sticker
└❒ Image_effect${petik}

┌❑ *ABOUT* ❑
│
${petik}├❒ Source
├❒ ThanksTo
├❒ Group_support
└❒ Ownerbot${petik}

❒ _Creator BotWea © 2K21_ ❒
`
}
const convert = (prefix) => {
	return`┌❑ *CONVERT MENU* ❑
│
${petik}├❒ ${prefix}toimg
├❒ ${prefix}tomp3
├❒ ${prefix}tomp4
├❒ ${prefix}slow
├❒ ${prefix}tupai
├❒ ${prefix}fast
├❒ ${prefix}reverse
└❒ ${prefix}tourl${petik}
`
}
const download = (prefix) => {
	return`┌❑ *DOWNLOAD MENU* ❑
│
${petik}├❒ ${prefix}ytsearch${petik} _query_
${petik}├❒ ${prefix}igstalk${petik} _username_
${petik}├❒ ${prefix}ghstalk${petik} _username_
${petik}├❒ ${prefix}play${petik} _query_
${petik}├❒ ${prefix}playmp4${petik} _query_
${petik}├❒ ${prefix}video${petik} _query_
${petik}├❒ ${prefix}ytmp3${petik} _link_
${petik}├❒ ${prefix}ytmp4${petik} _link_
${petik}├❒ ${prefix}ig${petik} _link_
${petik}├❒ ${prefix}igphoto${petik} _link_
${petik}├❒ ${prefix}igvideo${petik} _link_
${petik}├❒ ${prefix}igtv${petik} _link_
${petik}├❒ ${prefix}igreels${petik} _link_
${petik}├❒ ${prefix}twitter${petik} _link_
${petik}├❒ ${prefix}tiktokwm${petik} _link_
${petik}├❒ ${prefix}tiktoknowm${petik} _link_
${petik}├❒ ${prefix}tiktokaudio${petik} _link_
${petik}├❒ ${prefix}fb${petik} _link_
${petik}├❒ ${prefix}brainly${petik} _query_
${petik}├❒ ${prefix}image${petik} _query_
${petik}├❒ ${prefix}pinterest${petik} _query_
${petik}├❒ ${prefix}pinterest2${petik} _query_
${petik}├❒ ${prefix}playstore${petik} _query_
${petik}├❒ ${prefix}gcwa${petik} _query_
${petik}├❒ ${prefix}lirik${petik} _query_
${petik}├❒ ${prefix}komiku${petik} _query_
${petik}├❒ ${prefix}otaku${petik} _query_
${petik}└❒ ${prefix}anime${petik} _random_
`
}
const allmenu = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)  => {
	return`❏───「 *SOI BOT* 」───❏
     
┌❏ *INDONESIA TIME*
${petik}│◦➛ WIB : ${timuu}
│◦➛ WITA : ${wita}
└❏ WIT : ${wit}${petik}
                          
┌❏ *TODAY*
${petik}│◦➛${ucapannya2}
│◦➛Jam : ${timuu}
│◦➛Hari : ${thisDay}
└❏ Tanggal : ${ini_tanggal}${petik}

┌❏ *DEVICE*
${petik}│◦➛Whatsapp : ${wa_version}
│◦➛Merk HP : ${device_manufacturer}
│◦➛Versi HP : ${device_model}
│◦➛Versi OS : ${os_version}
│◦➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◦➛MCC : ${mcc}
└❏ MNC : ${mnc}${petik}

┌─❑「 *BOT INFO* 」
${petik}│◦➛Mode : ${status}
│◦➛Prefix : ${prefix}
│◦➛Total Hit : ${hit_today.length}
│◦➛Personal Chat : ${totalchat.length - ini_gcchat.lenght}
│◦➛Total All Chat : ${totalchat.length}
│◦➛Group Chat : ${ini_gcchat}
│◦➛Browser : Chrome
│◦➛Server : Baileys
│◦➛Version : 3.5.2${petik}
${petik}│◦➛Speed :${petik} ${latensiii} 
${petik}└❏ ${tekss}${petik}

┌─❑「 *CONVERT MENU* 」
│
${petik}│◦ ${prefix}toimg
│◦ ${prefix}tomp3
│◦ ${prefix}tomp4
│◦ ${prefix}slow
│◦ ${prefix}tupai
│◦ ${prefix}fast
│◦ ${prefix}reverse
│◦ ${prefix}tourl${petik}
│
├❑「 *DOWNLOAD MENU* 」
│
${petik}│◦ ${prefix}ytsearch${petik} _query_
${petik}│◦ ${prefix}igstalk${petik} _username_
${petik}│◦ ${prefix}ghstalk${petik} _username_
${petik}│◦ ${prefix}play${petik} _query_
${petik}│◦ ${prefix}playmp4${petik} _query_
${petik}│◦ ${prefix}video${petik} _query_
${petik}│◦ ${prefix}ytmp3${petik} _link_
${petik}│◦ ${prefix}ytmp4${petik} _link_
${petik}│◦ ${prefix}ig${petik} _link_
${petik}│◦ ${prefix}igphoto${petik} _link_
${petik}│◦ ${prefix}igvideo${petik} _link_
${petik}│◦ ${prefix}igtv${petik} _link_
${petik}│◦ ${prefix}igreels${petik} _link_
${petik}│◦ ${prefix}twitter${petik} _link_
${petik}│◦ ${prefix}tiktokwm${petik} _link_
${petik}│◦ ${prefix}tiktoknowm${petik} _link_
${petik}│◦ ${prefix}tiktokaudio${petik} _link_
${petik}│◦ ${prefix}fb${petik} _link_
${petik}│◦ ${prefix}brainly${petik} _query_
${petik}│◦ ${prefix}image${petik} _query_
${petik}│◦ ${prefix}pinterest${petik} _query_
${petik}│◦ ${prefix}pinterest2${petik} _query_
${petik}│◦ ${prefix}playstore${petik} _query_
${petik}│◦ ${prefix}gcwa${petik} _query_
${petik}│◦ ${prefix}lirik${petik} _query_
${petik}│◦ ${prefix}komiku${petik} _query_
${petik}│◦ ${prefix}anime${petik} _random_
│
├❑「 *FUN MENU* 」
│
${petik}│◦ ${prefix}fitnah
│◦ ${prefix}absen
│◦ ${prefix}absensi
│◦ ${prefix}tebakgambar
│◦ ${prefix}caklontong
│◦ ${prefix}family100
│◦ ${prefix}tebakanime
│◦ ${prefix}suit
│◦ ${prefix}fitnahpc${petik} text|balasan
${petik}│◦ ${prefix}kontak${petik} 62xxx|text
${petik}│◦ ${prefix}tictactoe${petik} @user
${petik}│◦ ${prefix}delttt${petik}
${petik}│◦ ${prefix}voting${petik} @user|reason|time
${petik}│◦ ${prefix}delvote${petik}
${petik}│◦ ${prefix}jadibot${petik}
${petik}│◦ ${prefix}stopjadibot${petik}
${petik}│◦ ${prefix}listbot${petik}
│
├❑「 *MAKER MENU* 」
│
${petik}│◦ ${prefix}sticker${petik}
${petik}│◦ ${prefix}smeme${petik} atas|bawah
${petik}│◦ ${prefix}ktpmaker${petik}
${petik}│◦ ${prefix}attp${petik}
${petik}│◦ ${prefix}ttp${petik}
${petik}│◦ ${prefix}ttp1${petik}
${petik}│◦ ${prefix}ttp2${petik}
${petik}│◦ ${prefix}ttp3${petik}
${petik}│◦ ${prefix}ttp4${petik}
${petik}│◦ ${prefix}swm${petik} author|packname
${petik}│◦ ${prefix}take${petik} author|packname
${petik}│◦ ${prefix}fdeface${petik}
${petik}│◦ ${prefix}amongus${petik} 
${petik}│◦ ${prefix}tweettrump${petik} text
${petik}│◦ ${prefix}cmm${petik} text
${petik}│◦ ${prefix}kanna${petik} text
${petik}│◦ ${prefix}tahta${petik} text
${petik}│◦ ${prefix}neon2${petik} text
${petik}│◦ ${prefix}wall${petik} text
${petik}│◦ ${prefix}wolf${petik} text
${petik}│◦ ${prefix}tfire${petik} text
${petik}│◦ ${prefix}ytgold${petik} text
${petik}│◦ ${prefix}ytsilver${petik} text
${petik}│◦ ${prefix}t3d${petik} text
${petik}│◦ ${prefix}logoa${petik} text|text
${petik}│◦ ${prefix}pornhub${petik} text|text
${petik}│◦ ${prefix}marvel${petik} text|text
${petik}│◦ ${prefix}leavest${petik} text
${petik}│◦ ${prefix}phcoment${petik} text|text
${petik}│◦ ${prefix}nulis${petik} text
${petik}│◦ ${prefix}nulis2${petik}
${petik}│◦ ${prefix}emoji${petik} 👼
${petik}│◦ ${prefix}naruto${petik} text
${petik}│◦ ${prefix}blueneon${petik} text
${petik}│◦ ${prefix}matrix${petik} text
${petik}│◦ ${prefix}greenneon${petik} text
${petik}│◦ ${prefix}dropwater${petik} text|text
${petik}│◦ ${prefix}wolflogo${petik} text
${petik}│◦ ${prefix}flowertext${petik} text
${petik}│◦ ${prefix}crosslogo${petik} text
${petik}│◦ ${prefix}silktext${petik} text
${petik}│◦ ${prefix}flametext${petik} text
${petik}│◦ ${prefix}glowtext${petik} text
${petik}│◦ ${prefix}smoketext${petik} text
${petik}│◦ ${prefix}pubglogo${petik} text|text
${petik}│◦ ${prefix}skytext${petik} text
${petik}│◦ ${prefix}cslogo${petik} text
│
├❑ 「 *IMAGE EFFECT* 」
│
${petik}│◦ ${prefix}trigger
│◦ ${prefix}gay
│◦ ${prefix}glass
│◦ ${prefix}passed
│◦ ${prefix}jail
│◦ ${prefix}comrade
│◦ ${prefix}hijau
│◦ ${prefix}biru
│◦ ${prefix}greyscale
│◦ ${prefix}invert
│◦ ${prefix}invert_greyscale
│◦ ${prefix}red
│◦ ${prefix}blurple
│◦ ${prefix}blurple2
│◦ ${prefix}wasted
│◦ ${prefix}pelangi
│◦ ${prefix}sepia
│◦ ${prefix}wanted
│◦ ${prefix}utatoo
│◦ ${prefix}unsharpen
│◦ ${prefix}thanos
│◦ ${prefix}sniper
│◦ ${prefix}sharpen
│◦ ${prefix}scary
│◦ ${prefix}rip
│◦ ${prefix}rejected
│◦ ${prefix}redple
│◦ ${prefix}posterize
│◦ ${prefix}ps4
│◦ ${prefix}pixelize
│◦ ${prefix}missionpassed
│◦ ${prefix}moustache
│◦ ${prefix}lookwhatkarenhave
│◦ ${prefix}instagram
│◦ ${prefix}glitch
│◦ ${prefix}frame
│◦ ${prefix}fire
│◦ ${prefix}distort
│◦ ${prefix}dictator
│◦ ${prefix}deepfry
│◦ ${prefix}ddungeon
│◦ ${prefix}circle
│◦ ${prefix}challenger
│◦ ${prefix}burn
│◦ ${prefix}brazzers
│◦ ${prefix}beautiful${petik}
│
├❑「 *GROUP MENU* 」
│
${petik}│◦ ${prefix}add${petik} 62***
${petik}│◦ ${prefix}kick${petik} _@user_
${petik}│◦ ${prefix}radd${petik} _reply pesan @user_
${petik}│◦ ${prefix}rkick${petik} _reply pesan @user_
${petik}│◦ ${prefix}ping${petik}
${petik}│◦ ${prefix}nsfw${petik} _on / off_
${petik}│◦ ${prefix}antilink${petik} _on / off_
${petik}│◦ ${prefix}get${petik} _link_
${petik}│◦ ${prefix}getpp${petik} _@user_
${petik}│◦ ${prefix}getname${petik} _reply_
${petik}│◦ ${prefix}size${petik} _reply media_
${petik}│◦ ${prefix}colongsw${petik} _reply sw_
${petik}│◦ ${prefix}getbio${petik} _@user_
${petik}│◦ ${prefix}tagall
│◦ ${prefix}listonline
│◦ ${prefix}caripesan${petik} query
${petik}│◦ ${prefix}caripesan2${petik} _query_
${petik}│◦ ${prefix}searchmsg${petik} _query|total_
${petik}│◦ ${prefix}sider${petik} _reply pesan bot_
${petik}│◦ ${prefix}del${petik} _reply pesan bot_
${petik}│◦ ${prefix}q${petik} _reply pesan_
${petik}│◦ ${prefix}afk${petik} _reason_
${petik}│◦ ${prefix}getsider${petik} _reply pesan bot_
${petik}│◦ ${prefix}promoteall
│◦ ${prefix}ppcouple
│◦ ${prefix}setname
│◦ ${prefix}revoke
│◦ ${prefix}setdesk
│◦ ${prefix}spam${petik} text|jumlah
${petik}│◦ ${prefix}demoteall
│◦ ${prefix}admin
│◦ ${prefix}listpc
│◦ ${prefix}listgroup
│◦ ${prefix}hentai
│◦ ${prefix}trapnime
│◦ ${prefix}sewa add/del waktu
│◦ ${prefix}listsewa
│◦ ${prefix}ceksewa
│◦ ${prefix}premium add 62xxx waktu
│◦ ${prefix}cekpremium
│◦ ${prefix}listprem
│◦ ${prefix}belipremium
│◦ ${prefix}sewabot
│◦ ${prefix}verify
│◦ ${prefix}limit
│◦ ${prefix}profile
│◦ ${prefix}buylimit
│◦ ${prefix}buyglimit
│◦ ${prefix}awoo
│◦ ${prefix}megumin${petik}
│
├❑「 *OWNER MENU* 」
│
${petik}│◦ ${prefix}off
│◦ ${prefix}on
│◦ ${prefix}buggc
│◦ ${prefix}bc
│◦ ${prefix}bcimage
│◦ ${prefix}bcgif
│◦ ${prefix}bcvideo
│◦ ${prefix}bcaudio
│◦ ${prefix}bcsticker
│◦ ${prefix}virus1
│◦ ${prefix}virus2
│◦ ${prefix}virus3
│◦ ${prefix}virus4
│◦ ${prefix}ban
│◦ ${prefix}unban
│◦ ${prefix}block
│◦ ${prefix}unblock
│◦ ${prefix}status
│◦ ${prefix}clearall
│◦ ${prefix}self
│◦ ${prefix}public
│◦ ${prefix}join
│◦ ${prefix}leave
│◦ ${prefix}clearall
│◦ ${prefix}readall
│◦ ${prefix}unreadall
│◦ ${prefix}archive
│◦ ${prefix}unarchive
│◦ ${prefix}pin
│◦ ${prefix}delthischat
│◦ ${prefix}unpin${petik}
${petik}│◦ ${prefix}autoread${petik} <query> on / off
${petik}│◦ ${prefix}antibug${petik} on / off
${petik}│◦ ${prefix}antidelete${petik} on / off
${petik}│◦ ${prefix}anticall${petik} on / off
${petik}│◦ ${prefix}autoketik${petik} on / off
${petik}│◦ ${prefix}autovn${petik} on / off
${petik}│◦ ${prefix}antihidetag${petik} on / off
${petik}│◦ ${prefix}autobio${petik} on / off
${petik}│◦ ${prefix}register${petik} on / off
${petik}│◦ ${prefix}autorespon${petik} on / off
${petik}│◦ ${prefix}setthumb
│◦ ${prefix}settarget
│◦ ${prefix}setfakeimg
│◦ ${prefix}setreply${petik}
${petik}│◦ ${prefix}term${petik} _code_
${petik}│◦ x or >${petik} _code_
${petik}│◦ $ ${petik} _termux code_
${petik}│◦ => ${petik} _eval async_
│
├❑「 *SET STC CMD* 」
│
${petik}│◦ ${prefix}set_stc_menu${petik} _<query>_
${petik}│◦ ${prefix}set_stc_ping${petik} _<query>_
${petik}│◦ ${prefix}set_stc_gclose${petik} _<query>_
${petik}│◦ ${prefix}set_stc_gopen${petik} _<query>_
${petik}│◦ ${prefix}set_stc_itos${petik} _<query>_
${petik}│◦ ${prefix}set_stc_toimg${petik} _<query>_
${petik}│◦ ${prefix}set_stc_self${petik} _<query>_
${petik}│◦ ${prefix}set_stc_public${petik} _<query>_
│
├❑「 *STORAGE  MENU* 」
│
${petik}│◦ ${prefix}addstik 
│◦ ${prefix}addimg 
│◦ ${prefix}addvid 
│◦ ${prefix}addvn   
│◦ ${prefix}liststick
│◦ ${prefix}listimg
│◦ ${prefix}listvid
│◦ ${prefix}listvn
│◦ ${prefix}addrespon
│◦ ${prefix}delrespon
│◦ ${prefix}listrespon${petik}
│
├❑「 *TAG  MENU* 」
│
${petik}│◦ ${prefix}hidetag
│◦ ${prefix}kontag
│◦ ${prefix}sticktag
│◦ ${prefix}totag${petik}
│
├❑「 *UP ESWE* 」
│
${petik}│◦ ${prefix}upswteks
│◦ ${prefix}upswimage
│◦ ${prefix}upswvideo${petik}
│
├❑「 *NSFW & SFW* 」
│
${petik}│◦ ${prefix}ahegao
│◦ ${prefix}ass
│◦ ${prefix}bdsm
│◦ ${prefix}blowjob
│◦ ${prefix}blowjob2
│◦ ${prefix}cuckold
│◦ ${prefix}cum
│◦ ${prefix}ero
│◦ ${prefix}femdom
│◦ ${prefix}foot
│◦ ${prefix}gangbang
│◦ ${prefix}glasses
│◦ ${prefix}jahy
│◦ ${prefix}manga
│◦ ${prefix}masturbation
│◦ ${prefix}neko
│◦ ${prefix}orgy
│◦ ${prefix}panties
│◦ ${prefix}pussy
│◦ ${prefix}tentacles
│◦ ${prefix}thighs
│◦ ${prefix}yuri
│◦ ${prefix}feet
│◦ ${prefix}lewdkemo
│◦ ${prefix}woof
│◦ ${prefix}gasm
│◦ ${prefix}solo
│◦ ${prefix}8ball
│◦ ${prefix}goose
│◦ ${prefix}avatar
│◦ ${prefix}hololewd
│◦ ${prefix}gecg
│◦ ${prefix}holo
│◦ ${prefix}fox_girl
│◦ ${prefix}tits
│◦ ${prefix}eroyuri
│◦ ${prefix}holoyero
│◦ ${prefix}lizard
│◦ ${prefix}keta
│◦ ${prefix}eron
│◦ ${prefix}erok
│◦ ${prefix}kemonomimi
│◦ ${prefix}cum_jpg
│◦ ${prefix}nsfw_avatar
│◦ ${prefix}erofeet
│◦ ${prefix}meow
│◦ ${prefix}wallpaper
│◦ ${prefix}waifu
│◦ ${prefix}trap
│◦ ${prefix}lewd
│◦ ${prefix}pussy_jpg
│◦ ${prefix}futanari
│◦ ${prefix}lewdk
│◦ ${prefix}solog
│◦ ${prefix}smug
│◦ ${prefix}cum
│◦ ${prefix}slap
│◦ ${prefix}les
│◦ ${prefix}erokemo
│◦ ${prefix}bj
│◦ ${prefix}pwankg
│◦ ${prefix}pat
│◦ ${prefix}poke
│◦ ${prefix}feed
│◦ ${prefix}nsfw_neko_gif
│◦ ${prefix}pussy
│◦ ${prefix}feetg
│◦ ${prefix}baka
│◦ ${prefix}hug
│◦ ${prefix}kiss
│◦ ${prefix}tickle
│◦ ${prefix}spank
│◦ ${prefix}kuni
│◦ ${prefix}classic
│◦ ${prefix}boobs
│◦ ${prefix}anal
│◦ ${prefix}ngif
│◦ ${prefix}cuddle
│◦ ${prefix}zettai${petik}
│
├❑ 「 *STC  MENU* 」
│
${petik}│◦ ${prefix}awoawo
│◦ ${prefix}benedict
│◦ ${prefix}chat
│◦ ${prefix}dbfly
│◦ ${prefix}dino_kuning
│◦ ${prefix}doge
│◦ ${prefix}gojosatoru
│◦ ${prefix}hope_boy
│◦ ${prefix}jisoo
│◦ ${prefix}kr_robot
│◦ ${prefix}kucing
│◦ ${prefix}lonte
│◦ ${prefix}manusia_lidi
│◦ ${prefix}menjamet
│◦ ${prefix}meow
│◦ ${prefix}nicholas
│◦ ${prefix}patrick
│◦ ${prefix}popoci
│◦ ${prefix}sponsbob
│◦ ${prefix}kawan_sponsbob
│◦ ${prefix}tyni${petik}
│
├❑「 *CECAN  MENU* 」 
│
${petik}│◦ ${prefix}china
│◦ ${prefix}indonesia
│◦ ${prefix}malaysia
│◦ ${prefix}thailand
│◦ ${prefix}korea
│◦ ${prefix}japan
│◦ ${prefix}vietnam
│◦ ${prefix}jenni
│◦ ${prefix}jiso
│◦ ${prefix}lisa
│◦ ${prefix}rose${petik}
│
├❑「 *QUOTES  MENU* 」 
│
│◦ ${petik}${prefix}katailham${petik}  
│◦ ${petik}${prefix}dare${petik}   
│◦ ${petik}${prefix}truth${petik}  
│◦ ${petik}${prefix}katabijak_lucu${petik}   
│◦ ${petik}${prefix}katacaklontong${petik}  
│◦ ${petik}${prefix}katadilan${petik}  
│
├❑「 *COGAN  MENU* 」 
│
│◦ ${petik}${prefix}baekhyung${petik}  
│◦ ${petik}${prefix}dohkyungsoo${petik}  
│◦ ${petik}${prefix}huangzitao${petik}  
│◦ ${petik}${prefix}jhope${petik}  
│◦ ${petik}${prefix}jimin${petik} 
│◦ ${petik}${prefix}jungkook${petik} 
│◦ ${petik}${prefix}kimjondae${petik}  
│◦ ${petik}${prefix}kimjong${petik}  
│◦ ${petik}${prefix}kimjunmyeon${petik}  
│◦ ${petik}${prefix}kimminseok${petik} 
│◦ ${petik}${prefix}kimnanjoon${petik}  
│◦ ${petik}${prefix}kimseok${petik}  
│◦ ${petik}${prefix}kimtaehyung${petik}  
│◦ ${petik}${prefix}luhan${petik}  
│◦ ${petik}${prefix}ohsehun${petik} 
│◦ ${petik}${prefix}parkchanyeol${petik} 
│◦ ${petik}${prefix}suga${petik}  
│◦ ${petik}${prefix}wuyifan${petik}
│
├❑「 *ASUPAN  MENU* 」
│
${petik}│◦ ${prefix}rikagusriani 
│◦ ${prefix}ukhty 
│◦ ${prefix}santuy 
│◦ ${prefix}geayubi   
│◦ ${prefix}bocil
│◦ ${prefix}asupan
│◦ ${prefix}chika 
│◦ ${prefix}delvira 
│◦ ${prefix}ayu   
│◦ ${prefix}bunga
│◦ ${prefix}aura
│◦ ${prefix}nisa 
│◦ ${prefix}ziva 
│◦ ${prefix}yana   
│◦ ${prefix}viona
│◦ ${prefix}syania
│◦ ${prefix}riri   
│◦ ${prefix}syifa
│◦ ${prefix}mama_gina
│◦ ${prefix}alcakenya 
│◦ ${prefix}mangayutri${petik}
│
├❑「 *ANIME  MENU* 」
│
│◦ ${petik}${prefix}anna${petik}
│◦ ${petik}${prefix}asuna_yuki${petik} 
│◦ ${petik}${prefix}ayuzawa${petik} 
│◦ ${petik}${prefix}chitoge${petik} 
│◦ ${petik}${prefix}emilia${petik}
│◦ ${petik}${prefix}erza${petik} 
│◦ ${petik}${prefix}hinata${petik} 
│◦ ${petik}${prefix}inori${petik} 
│◦ ${petik}${prefix}kaga_kouko${petik} 
│◦ ${petik}${prefix}kaori_miyazono${petik} 
│◦ ${petik}${prefix}kotori_minami${petik}
│◦ ${petik}${prefix}mikasa${petik} 
│◦ ${petik}${prefix}mio_akiyama${petik} 
│◦ ${petik}${prefix}mizore_sirayuki${petik} 
│◦ ${petik}${prefix}nakiri_alice${petik} 
│◦ ${petik}${prefix}naruto${petik} 
│◦ ${petik}${prefix}riyas_gremori${petik}
│◦ ${petik}${prefix}sakura${petik} 
│◦ ${petik}${prefix}sasuke${petik} 
│◦ ${petik}${prefix}sento_isuzu${petik} 
│◦ ${petik}${prefix}shana${petik} 
│◦ ${petik}${prefix}shiina${petik} 
│◦ ${petik}${prefix}shinka${petik}
│◦ ${petik}${prefix}winry${petik}
│◦ ${petik}${prefix}yukino${petik} 
│◦ ${petik}${prefix}yuzuki${petik} 
│◦ ${petik}${prefix}akame${petik}
│◦ ${petik}${prefix}mikosiba${petik}
│
└─❑「 MENU BOT 」

❏───「 *SOI BOT* 」───❏
`
}

const fun = (prefix) => {
	return`┌❑  *FUN MENU* ❑
│
${petik}├❒ ${prefix}fitnah
├❒ ${prefix}absen
├❒ ${prefix}absensi
├❒ ${prefix}tebakgambar
├❒ ${prefix}caklontong
├❒ ${prefix}family100
├❒ ${prefix}tebakanime
├❒ ${prefix}suit
├❒ ${prefix}fitnahpc${petik} text|balasan
${petik}├❒ ${prefix}kontak${petik} 62xxx|text
${petik}├❒ ${prefix}tictactoe${petik} @user
${petik}├❒ ${prefix}delttt${petik}
${petik}├❒ ${prefix}voting${petik}
${petik}├❒ ${prefix}delvote${petik}
${petik}├❒ ${prefix}jadibot${petik}
${petik}├❒ ${prefix}stopjadibot${petik}
${petik}└❒ ${prefix}listbot${petik}
`
}

const maker = (prefix) => {
	return`┌❑  *MAKER MENU* ❑
│
${petik}├❒ ${prefix}sticker${petik}
${petik}├❒ ${prefix}smeme${petik}
${petik}├❒ ${prefix}ktpmaker${petik}
${petik}├❒ ${prefix}attp${petik}
${petik}├❒ ${prefix}ttp${petik}
${petik}├❒ ${prefix}ttp1${petik}
${petik}├❒ ${prefix}ttp2${petik}
${petik}├❒ ${prefix}ttp3${petik}
${petik}├❒ ${prefix}ttp4${petik}
${petik}├❒ ${prefix}swm${petik} author|packname
${petik}├❒ ${prefix}take${petik} author|packname
${petik}├❒ ${prefix}fdeface${petik}
${petik}├❒ ${prefix}amongus${petik} 
${petik}├❒ ${prefix}tweettrump${petik} text
${petik}├❒ ${prefix}cmm${petik} text
${petik}├❒ ${prefix}kanna${petik} text
${petik}├❒ ${prefix}tahta${petik} text
${petik}├❒ ${prefix}neon2${petik} text
${petik}├❒ ${prefix}wall${petik} text
${petik}├❒ ${prefix}wolf${petik} text
${petik}├❒ ${prefix}tfire${petik} text
${petik}├❒ ${prefix}ytgold${petik} text
${petik}├❒ ${prefix}ytsilver${petik} text
${petik}├❒ ${prefix}t3d${petik} text
${petik}├❒ ${prefix}logoa${petik} text|text
${petik}├❒ ${prefix}pornhub${petik} text|text
${petik}├❒ ${prefix}marvel${petik} text|text
${petik}├❒ ${prefix}leavest${petik} text
${petik}├❒ ${prefix}phcoment${petik} text|text
${petik}├❒ ${prefix}nulis${petik} text
${petik}├❒ ${prefix}nulis2${petik}
${petik}├❒ ${prefix}naruto${petik} text
${petik}├❒ ${prefix}blueneon${petik} text
${petik}├❒ ${prefix}matrix${petik} text
${petik}├❒ ${prefix}greenneon${petik} text
${petik}├❒ ${prefix}dropwater${petik} text|text
${petik}├❒ ${prefix}wolflogo${petik} text
${petik}├❒ ${prefix}flowertext${petik} text
${petik}├❒ ${prefix}crosslogo${petik} text
${petik}├❒ ${prefix}silktext${petik} text
${petik}├❒ ${prefix}flametext${petik} text
${petik}├❒ ${prefix}glowtext${petik} text
${petik}├❒ ${prefix}smoketext${petik} text
${petik}├❒ ${prefix}pubglogo${petik} text|text
${petik}├❒ ${prefix}skytext${petik} text
${petik}├❒ ${prefix}cslogo${petik} text
${petik}└❒ ${prefix}emoji${petik} 👼
`
}

const other = (prefix) => {
	return`┌❑  *GROUP MENU* ❑
│
${petik}├❒ ${prefix}add${petik} 62xxx
${petik}├❒ ${prefix}kick${petik} 62xxx
${petik}├❒ ${prefix}ping${petik}
${petik}├❒ ${prefix}antilink${petik} _on / off_
${petik}├❒ ${prefix}get${petik} _link_
${petik}├❒ ${prefix}getpp${petik} _@user_
${petik}├❒ ${prefix}getbio${petik} _@user_
${petik}├❒ ${prefix}getname${petik} _reply_
${petik}├❒ ${prefix}size${petik} _reply media_
${petik}├❒ ${prefix}colongsw${petik} _reply sw_
${petik}├❒ ${prefix}tagall
├❒ ${prefix}listonline
├❒ ${prefix}caripesan${petik} query
${petik}├❒ ${prefix}caripesan2${petik} _query_
${petik}├❒ ${prefix}searchmsg${petik} _query|total_
${petik}├❒ ${prefix}sider${petik} _reply pesan bot_
${petik}├❒ ${prefix}del${petik} _reply pesan bot_
${petik}├❒ ${prefix}q${petik} _reply pesan_
${petik}├❒ ${prefix}afk${petik} _reason_
${petik}├❒ ${prefix}getsider${petik} _reply pesan bot_
${petik}├❒ ${prefix}tagall
├❒ ${prefix}revoke
├❒ ${prefix}setname
├❒ ${prefix}ppcouple
├❒ ${prefix}promoteall
├❒ ${prefix}demoteall
├❒ ${prefix}admin
├❒ ${prefix}hentai
├❒ ${prefix}trapnime
├❒ ${prefix}sewa add/del waktu
├❒ ${prefix}listsewa
├❒ ${prefix}ceksewa
├❒ ${prefix}premium add 62xxx waktu
├❒ ${prefix}cekpremium
├❒ ${prefix}listprem
├❒ ${prefix}belipremium
├❒ ${prefix}sewabot
├❒ ${prefix}verify
├❒ ${prefix}limit
├❒ ${prefix}profile
├❒ ${prefix}buylimit
├❒ ${prefix}buyglimit
├❒ ${prefix}blowjob
├❒ ${prefix}awoo
└❒ ${prefix}megumin${petik}
`
}

const ownermenu = (prefix) => {
	return`┌❑  *OWNER MENU* ❑
│
${petik}├❒ ${prefix}off
├❒ ${prefix}on
├❒ ${prefix}buggc
├❒ ${prefix}bc
├❒ ${prefix}bcimage
├❒ ${prefix}bcgif
├❒ ${prefix}bcvideo
├❒ ${prefix}bcaudio
├❒ ${prefix}bcsticker
├❒ ${prefix}virus1
├❒ ${prefix}virus2
├❒ ${prefix}virus3
├❒ ${prefix}virus4
├❒ ${prefix}ban
├❒ ${prefix}unban
├❒ ${prefix}block
├❒ ${prefix}unblock
├❒ ${prefix}status
├❒ ${prefix}clearall
├❒ ${prefix}self
├❒ ${prefix}public
├❒ ${prefix}join 
├❒ ${prefix}leave
├❒ ${prefix}readall
├❒ ${prefix}unreadall
├❒ ${prefix}archive
├❒ ${prefix}unarchive
├❒ ${prefix}pin
├❒ ${prefix}delthischat
├❒ ${prefix}unpin
├❒ ${prefix}autoread <query> on / off
├❒ ${prefix}antibug on / off
├❒ ${prefix}antidelete on / off
├❒ ${prefix}anticall on / off
├❒ ${prefix}autoketik on / off
├❒ ${prefix}autobio on / off
├❒ ${prefix}antihidetag on / off
├❒ ${prefix}autovn on / off
├❒ ${prefix}register on / off
├❒ ${prefix}autorespon on / off
├❒ ${prefix}setthumb
├❒ ${prefix}settarget
├❒ ${prefix}setfakeimg
├❒ ${prefix}setreply${petik}
${petik}├❒ ${prefix}term${petik} _code_
${petik}├❒ $ ${petik} _termux code_
${petik}├❒ => ${petik} _eval async_
${petik}└❒ x or >${petik} _code_
`
}

const setStcCmd = (prefix) => {
	return`┌❑  *SET STC CMD* ❑
│
${petik}├❒ ${prefix}set_stc_menu
├❒ ${prefix}set_stc_ping
├❒ ${prefix}set_stc_gclose
├❒ ${prefix}set_stc_gopen
├❒ ${prefix}set_stc_itos
├❒ ${prefix}set_stc_toimg
├❒ ${prefix}set_stc_self
└❒ ${prefix}set_stc_public${petik}

Cara penggunaan :
> ${prefix}set_stc_menu _fileLenght sticker_

Example :
> ${prefix}set_stc_menu 7446
`
}

const storage = (prefix) => {
	return`┌❑  *STORAGE MENU* ❑
│
${petik}├❒ ${prefix}addstik 
├❒ ${prefix}addimg 
├❒ ${prefix}addvid 
├❒ ${prefix}addvn   
├❒ ${prefix}liststick
├❒ ${prefix}listimg
├❒ ${prefix}listvid
├❒ ${prefix}listvn
├❒ ${prefix}addrespon
├❒ ${prefix}delrespon
└❒ ${prefix}listrespon${petik}
`
}
const cecanmenu = (prefix) => {
	return`┌❑  *GACHA CECAN* ❑
│
${petik}├❒ ${prefix}china
├❒ ${prefix}indonesia
├❒ ${prefix}malaysia
├❒ ${prefix}thailand
├❒ ${prefix}korea
├❒ ${prefix}japan
├❒ ${prefix}vietnam
├❒ ${prefix}jenni
├❒ ${prefix}jiso
├❒ ${prefix}lisa
└❒ ${prefix}rose${petik}
`
}

const tag = (prefix) => {
	return`┌❑  *TAG MENU* ❑
│
${petik}├❒ ${prefix}hidetag
├❒ ${prefix}kontag
├❒ ${prefix}sticktag
└❒ ${prefix}totag${petik}
`
}

const upmenu = (prefix) => {
	return`┌❑  *UP ESWE* ❑
│
${petik}├❒ ${prefix}upswteks
├❒ ${prefix}upswimage
└❒ ${prefix}upswvideo${petik}
`
}
const nsfw = (prefix) => {
	return`┌❑  *NSFW & SFW* ❑
│
${petik}├❒ ${prefix}ahegao
├❒ ${prefix}ass
├❒ ${prefix}bdsm
├❒ ${prefix}blowjob
├❒ ${prefix}blowjob2
├❒ ${prefix}cuckold
├❒ ${prefix}cum
├❒ ${prefix}ero
├❒ ${prefix}femdom
├❒ ${prefix}foot
├❒ ${prefix}gangbang
├❒ ${prefix}glasses
├❒ ${prefix}jahy
├❒ ${prefix}manga
├❒ ${prefix}masturbation
├❒ ${prefix}neko
├❒ ${prefix}orgy
├❒ ${prefix}panties
├❒ ${prefix}pussy
├❒ ${prefix}tentacles
├❒ ${prefix}thighs
├❒ ${prefix}yuri
├❒ ${prefix}feet
├❒ ${prefix}lewdkemo
├❒ ${prefix}woof
├❒ ${prefix}gasm
├❒ ${prefix}solo
├❒ ${prefix}8ball
├❒ ${prefix}goose
├❒ ${prefix}avatar
├❒ ${prefix}hololewd
├❒ ${prefix}gecg
├❒ ${prefix}holo
├❒ ${prefix}fox_girl
├❒ ${prefix}tits
├❒ ${prefix}eroyuri
├❒ ${prefix}holoyero
├❒ ${prefix}lizard
├❒ ${prefix}keta
├❒ ${prefix}eron
├❒ ${prefix}erok
├❒ ${prefix}kemonomimi
├❒ ${prefix}cum_jpg
├❒ ${prefix}nsfw_avatar
├❒ ${prefix}erofeet
├❒ ${prefix}meow
├❒ ${prefix}wallpaper
├❒ ${prefix}waifu
├❒ ${prefix}trap
├❒ ${prefix}lewd
├❒ ${prefix}pussy_jpg
├❒ ${prefix}futanari
├❒ ${prefix}lewdk
├❒ ${prefix}solog
├❒ ${prefix}smug
├❒ ${prefix}cum
├❒ ${prefix}slap
├❒ ${prefix}les
├❒ ${prefix}erokemo
├❒ ${prefix}bj
├❒ ${prefix}pwankg
├❒ ${prefix}pat
├❒ ${prefix}poke
├❒ ${prefix}feed
├❒ ${prefix}nsfw_neko_gif
├❒ ${prefix}pussy
├❒ ${prefix}feetg
├❒ ${prefix}baka
├❒ ${prefix}hug
├❒ ${prefix}kiss
├❒ ${prefix}tickle
├❒ ${prefix}spank
├❒ ${prefix}kuni
├❒ ${prefix}classic
├❒ ${prefix}boobs
├❒ ${prefix}anal
├❒ ${prefix}ngif
├❒ ${prefix}cuddle
└❒ ${prefix}zettai${petik}
`
}
const asupan = (prefix) => {
	return`┌❑  *ASUPAN MENU* ❑
│
${petik}├❒ ${prefix}rikagusriani 
├❒ ${prefix}ukhty 
├❒ ${prefix}santuy 
├❒ ${prefix}geayubi   
├❒ ${prefix}bocil
├❒ ${prefix}asupan
├❒ ${prefix}chika 
├❒ ${prefix}delvira 
├❒ ${prefix}ayu   
├❒ ${prefix}bunga
├❒ ${prefix}aura
├❒ ${prefix}nisa 
├❒ ${prefix}ziva 
├❒ ${prefix}yana   
├❒ ${prefix}viona
├❒ ${prefix}syania
├❒ ${prefix}riri   
├❒ ${prefix}syifa
├❒ ${prefix}mama_gina
├❒ ${prefix}alcakenya 
└❒ ${prefix}mangayutri${petik}
`
}
const telestiker = (prefix) => {
	return`┌❑  *STICKERS MENU* ❑
│
${petik}├❒ ${prefix}awoawo
├❒ ${prefix}benedict
├❒ ${prefix}chat
├❒ ${prefix}dbfly
├❒ ${prefix}dino_kuning
├❒ ${prefix}doge
├❒ ${prefix}gojosatoru
├❒ ${prefix}hope_boy
├❒ ${prefix}jisoo
├❒ ${prefix}kr_robot
├❒ ${prefix}kucing
├❒ ${prefix}lonte
├❒ ${prefix}manusia_lidi
├❒ ${prefix}menjamet
├❒ ${prefix}meow
├❒ ${prefix}nicholas
├❒ ${prefix}patrick
├❒ ${prefix}popoci
├❒ ${prefix}sponsbob
├❒ ${prefix}kawan_sponsbob
└❒ ${prefix}tyni${petik}
`
}
const image_effect_menu = (prefix) => {
	return`┌❑  *IMAGE EFFECT* ❑
│
${petik}├❒ ${prefix}trigger
├❒ ${prefix}gay
├❒ ${prefix}glass
├❒ ${prefix}passed
├❒ ${prefix}jail
├❒ ${prefix}comrade
├❒ ${prefix}hijau
├❒ ${prefix}biru
├❒ ${prefix}greyscale
├❒ ${prefix}invert
├❒ ${prefix}invert_greyscale
├❒ ${prefix}red
├❒ ${prefix}blurple
├❒ ${prefix}blurple2
├❒ ${prefix}wasted
├❒ ${prefix}pelangi
├❒ ${prefix}wanted
├❒ ${prefix}utatoo
├❒ ${prefix}unsharpen
├❒ ${prefix}thanos
├❒ ${prefix}sniper
├❒ ${prefix}sharpen
├❒ ${prefix}scary
├❒ ${prefix}rip
├❒ ${prefix}rejected
├❒ ${prefix}redple
├❒ ${prefix}posterize
├❒ ${prefix}ps4
├❒ ${prefix}pixelize
├❒ ${prefix}missionpassed
├❒ ${prefix}moustache
├❒ ${prefix}lookwhatkarenhave
├❒ ${prefix}instagram
├❒ ${prefix}glitch
├❒ ${prefix}frame
├❒ ${prefix}fire
├❒ ${prefix}distort
├❒ ${prefix}dictator
├❒ ${prefix}deepfry
├❒ ${prefix}ddungeon
├❒ ${prefix}circle
├❒ ${prefix}challenger
├❒ ${prefix}burn
├❒ ${prefix}brazzers
├❒ ${prefix}beautiful
└❒ ${prefix}sepia${petik}
`
}
const coganmenu = (prefix) => {
	return`┌❑ *GACHA COGAN* ❑
│
├❒ ${petik}${prefix}baekhyung${petik}  
├❒ ${petik}${prefix}dohkyungsoo${petik}  
├❒ ${petik}${prefix}huangzitao${petik}  
├❒ ${petik}${prefix}jhope${petik}  
├❒ ${petik}${prefix}jimin${petik} 
├❒ ${petik}${prefix}jungkook${petik} 
├❒ ${petik}${prefix}kimjondae${petik}  
├❒ ${petik}${prefix}kimjong${petik}  
├❒ ${petik}${prefix}kimjunmyeon${petik}  
├❒ ${petik}${prefix}kimminseok${petik} 
├❒ ${petik}${prefix}kimnanjoon${petik}  
├❒ ${petik}${prefix}kimseok${petik}  
├❒ ${petik}${prefix}kimtaehyung${petik}  
├❒ ${petik}${prefix}luhan${petik}  
├❒ ${petik}${prefix}ohsehun${petik} 
├❒ ${petik}${prefix}parkchanyeol${petik} 
├❒ ${petik}${prefix}suga${petik}  
└❒ ${petik}${prefix}wuyifan${petik}  
`
}

const quotesmenu = (prefix) => {
	return `┌❑ *QUOTES MENU* ❑
│
├❒ ${petik}${prefix}katailham${petik}  
├❒ ${petik}${prefix}dare${petik}   
├❒ ${petik}${prefix}truth${petik}  
├❒ ${petik}${prefix}katabijak_lucu${petik}   
├❒ ${petik}${prefix}katacaklontong${petik}  
└❒ ${petik}${prefix}katadilan${petik}  
`
}
const shopmenu = (prefix) => {
	return `┌❑ *SHOP MENU* ❑
│
├❒ ${petik}${prefix}shop${petik}  
├❒ ${petik}${prefix}price${petik}  
├❒ ${petik}${prefix}pubg${petik}   
├❒ ${petik}${prefix}ml${petik}   
├❒ ${petik}${prefix}ff${petik}   
├❒ ${petik}${prefix}aov${petik}   
├❒ ${petik}${prefix}cod${petik}  
├❒ ${petik}${prefix}sausage${petik}   
├❒ ${petik}${prefix}lol${petik}  
└❒ ${petik}${prefix}valo${petik}  
`
}
const animemenu = (prefix) => {
	return`┌❑ *ANIME MENU* ❑
│
├❒ ${petik}${prefix}anna${petik}
├❒ ${petik}${prefix}asuna_yuki${petik} 
├❒ ${petik}${prefix}ayuzawa${petik} 
├❒ ${petik}${prefix}chitoge${petik} 
├❒ ${petik}${prefix}emilia${petik}
├❒ ${petik}${prefix}erza${petik} 
├❒ ${petik}${prefix}hinata${petik} 
├❒ ${petik}${prefix}inori${petik} 
├❒ ${petik}${prefix}kaga_kouko${petik} 
├❒ ${petik}${prefix}kaori_miyazono${petik} 
├❒ ${petik}${prefix}kotori_minami${petik}
├❒ ${petik}${prefix}mikasa${petik} 
├❒ ${petik}${prefix}mio_akiyama${petik} 
├❒ ${petik}${prefix}mizore_sirayuki${petik} 
├❒ ${petik}${prefix}nakiri_alice${petik} 
├❒ ${petik}${prefix}naruto${petik} 
├❒ ${petik}${prefix}riyas_gremori${petik}
├❒ ${petik}${prefix}sakura${petik} 
├❒ ${petik}${prefix}sasuke${petik} 
├❒ ${petik}${prefix}sento_isuzu${petik} 
├❒ ${petik}${prefix}shana${petik} 
├❒ ${petik}${prefix}shiina${petik} 
├❒ ${petik}${prefix}shinka${petik}
├❒ ${petik}${prefix}winry${petik}
├❒ ${petik}${prefix}yukino${petik} 
├❒ ${petik}${prefix}yuzuki${petik} 
├❒ ${petik}${prefix}akame${petik}
└❒ ${petik}${prefix}mikosiba${petik}
`
}

exports.helpmenu = help
exports.convertmenu = convert
exports.funmenu = fun
exports.downloadmenu = download
exports.makermenu = maker
exports.othermenu = other
exports.ownermenu = ownermenu
exports.storagemenu = storage
exports.tagmenu = tag
exports.telestiker = telestiker
exports.cecanmenu= cecanmenu
exports.set_stc_cmd =  setStcCmd
exports.upmenu = upmenu
exports.nsfwmenu = nsfw
exports.asupanmenu = asupan
exports.allmenu = allmenu
exports.coganmenu = coganmenu
exports.image_effect = image_effect_menu
exports.quotesmenu = quotesmenu
exports.animemenu = animemenu
exports.shopmenu = shopmenu
