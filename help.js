const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
let hitbot = JSON.parse(fs.readFileSync('./database/dashboard/userhit.json'));
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

exports.menuall = (sender, prefix, pushname, ucapanWaktu, tanggal, jam, isOwner) => {
return `*MAIN MENU*
 • ${prefix}id
 • ${prefix}sc
 • ${prefix}simi
 • ${prefix}limit
 • ${prefix}rules
 • ${prefix}game
 • ${prefix}listgc
 • ${prefix}listpc
 • ${prefix}owner
 • ${prefix}script
 • ${prefix}server
 • ${prefix}buylimit
 • ${prefix}cekuser
 • ${prefix}runtime
 • ${prefix}dashboard

*STORE MENU*
 • ${prefix}list
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}update
 • ${prefix}tambah
 • ${prefix}kurang
 • ${prefix}kali
 • ${prefix}bagi

*PROSES/DONE*
 • proses < reply chat >
 • done < reply chat >
 • ${prefix}setproses
 • ${prefix}changeproses
 • ${prefix}delsetproses
 • ${prefix}setdone
 • ${prefix}changedone
 • ${prefix}delsetdone

*RESPON/MESSAGE*
 • ${prefix}delrespon
 • ${prefix}addrespon
 • ${prefix}setrespon
 • ${prefix}listrespon

*SET WELCOME/LEFT*
 • ${prefix}getleft
 • ${prefix}setleft
 • ${prefix}delleft
 • ${prefix}changeleft
 • ${prefix}setwelcome
 • ${prefix}delwelcome
 • ${prefix}getwelcome
 • ${prefix}changewelcome

*CEK USERNAME*
 • ${prefix}nickff
 • ${prefix}nickml
 • ${prefix}nicksupersus

*GROUP SETTING*
 • ${prefix}left on
 • ${prefix}left off
 • ${prefix}antilink on
 • ${prefix}antilink off
 • ${prefix}antiwame on
 • ${prefix}antiwame off
 • ${prefix}welcome on
 • ${prefix}welcome off

*GROUP MENU*
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}linkgc
 • ${prefix}infogc
 • ${prefix}infogrup
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}hidetag
 • ${prefix}tagall
 • ${prefix}open
 • ${prefix}close
 • ${prefix}setppgc
 • ${prefix}setppgc 'panjang'
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}revoke
 • ${prefix}setclose
 • ${prefix}setopen
 • ${prefix}delclose
 • ${prefix}delopen
 • ${prefix}getopen
 • ${prefix}getclose

*OWNERS MENU*
 • ${prefix}bc
 • ${prefix}join
 • ${prefix}left
 • ${prefix}self
 • ${prefix}public
 • ${prefix}sendsesi
 • ${prefix}creategc
 • ${prefix}setppbot
 • ${prefix}setthumb
 • ${prefix}broadcast
 • ${prefix}block 628xxx
 • ${prefix}unblock 628xxx
 • ${prefix}setppbot 'panjang'

*RESTART DATABASE*
 • ${prefix}resetall
 • ${prefix}resetlist
 • ${prefix}resethit
 • ${prefix}resetuser
 • ${prefix}resetgame
 • ${prefix}resetbalance

*CONVERT/TOOLS*
 • ${prefix}tts
 • ${prefix}ttp
 • ${prefix}attp
 • ${prefix}font
 • ${prefix}font2
 • ${prefix}isgd
 • ${prefix}tourl
 • ${prefix}cuttly
 • ${prefix}tinyurl
 • ${prefix}shorturl

*GENERATE TEXT*
 • ${prefix}hilih
 • ${prefix}halah
 • ${prefix}huluh
 • ${prefix}heleh
 • ${prefix}holoh

*ENCODE/DECODE*
 • ${prefix}base32
 • ${prefix}base64
 • ${prefix}debase32
 • ${prefix}debase64

*PRIMBON MENU*
 • ${prefix}artinama
 • ${prefix}nomorhoki
 • ${prefix}ramaljodoh
 • ${prefix}suamiistri
 • ${prefix}ramalcinta
 • ${prefix}artimimpi
 • ${prefix}sifatusaha
 • ${prefix}cocoknama
 • ${prefix}tafsirmimpi
 • ${prefix}ramaljodohbali
 • ${prefix}cocokpasangan

*RANDOM ANIME*
 • ${prefix}ass
 • ${prefix}ana
 • ${prefix}akira
 • ${prefix}asuna
 • ${prefix}ahegao
 • ${prefix}akiyama
 • ${prefix}aesthetic
 • ${prefix}deidara
 • ${prefix}ayuzawa
 • ${prefix}elaina
 • ${prefix}emilia
 • ${prefix}hinata
 • ${prefix}isuzu

*ANIME-SEARCH API*
 • ${prefix}animev1
 • ${prefix}animev2
 • ${prefix}mangav1
 • ${prefix}mangav2
 • ${prefix}kusonime
 • ${prefix}storyanime

*RANDOM ASUPAN*
 • ${prefix}rika
 • ${prefix}bocil
 • ${prefix}ghea
 • ${prefix}hijab
 • ${prefix}asupan
 • ${prefix}santuy
 • ${prefix}asupantiktok

*RANDOM MENU*
 • ${prefix}loli
 • ${prefix}dare
 • ${prefix}bucin
 • ${prefix}truth
 • ${prefix}meme
 • ${prefix}couple
 • ${prefix}jokes
 • ${prefix}quotes
 • ${prefix}cecan
 • ${prefix}cogan
 • ${prefix}anime

*COSPLAY RANDOM*
 • ${prefix}cosplay
 • ${prefix}cosplayloli
 • ${prefix}cosplaysagiri

*DOWNLOAD MENU*
 • ${prefix}play
 • ${prefix}musik
 • ${prefix}twitter
 • ${prefix}tiktok
 • ${prefix}tikporn
 • ${prefix}ytmp3
 • ${prefix}ytmp4
 • ${prefix}gitclone
 • ${prefix}ytshorts
 • ${prefix}mediafire
 • ${prefix}sosmed
 • ${prefix}facebook
 • ${prefix}zippyshare
 • ${prefix}soundcloud

*CONVERT STICKER*
 • ${prefix}sticker <reply image>
 • ${prefix}toimg <reply sticker>
 • ${prefix}toimage <reply sticker>
 • ${prefix}tovid <reply sticker gif>
 • ${prefix}tovideo <reply sticker gif>
 
*ISLAMIC MENU*
 • ${prefix}hadits
 • ${prefix}alquran
 • ${prefix}ayatkursi
 • ${prefix}renungan
 • ${prefix}doaharian
 • ${prefix}kisahnabi
 • ${prefix}tafsirsurah
 • ${prefix}asmaulhusna
 • ${prefix}bacaansholat

*SCRENSHOT WEBSITE*
 • ${prefix}tablet
 • ${prefix}phone
 • ${prefix}desktop

*GAMES MENU*
 • ${prefix}tekateki
 • ${prefix}tebaklirik
 • ${prefix}tebakkata
 • ${prefix}susunkata
 • ${prefix}tebakgame
 • ${prefix}caklontong
 • ${prefix}siapakahaku
 • ${prefix}tebakkalimat
 • ${prefix}tebakgambar
 • ${prefix}tebaktebakan

*MAKER MENU*
 • ${prefix}nulis
 • ${prefix}gura
 • ${prefix}logo1
 • ${prefix}logo2
 • ${prefix}logo3
 • ${prefix}logo4
 • ${prefix}logo5
 • ${prefix}logo6
 • ${prefix}logo7
 • ${prefix}logo8
 • ${prefix}sadcat
 • ${prefix}emojimix
 • ${prefix}emojimix2

*CUSTOM LOGO*
• ${prefix}maker1
• ${prefix}maker2
• ${prefix}maker3
• ${prefix}maker4
• ${prefix}maker5
• ${prefix}maker6
• ${prefix}maker7
• ${prefix}maker8
• ${prefix}maker9
• ${prefix}maker10
• ${prefix}maker11
• ${prefix}maker12
• ${prefix}maker13
• ${prefix}maker14
• ${prefix}maker15

*IMAGE CANVAS*
 • ${prefix}blur
 • ${prefix}hitler
 • ${prefix}putin
 • ${prefix}circle
 • ${prefix}trigger
 • ${prefix}resize
 • ${prefix}patrick
 • ${prefix}police
 • ${prefix}petimati
 • ${prefix}smeme
 • ${prefix}wanted
 • ${prefix}beautiful
 • ${prefix}spongebob
 • ${prefix}customlogo
 • ${prefix}discordblue
 • ${prefix}discordblack
 
*STRESS MENU*
 • ${prefix}simp
 • ${prefix}wangy
 • ${prefix}wangy2
 • ${prefix}nenen
 • ${prefix}sherk

*WALLPAPERS MENU*
 • ${prefix}game
 • ${prefix}islamic
 • ${prefix}mountain
 • ${prefix}cyberspace
 • ${prefix}technology
 • ${prefix}programming

*SEARCHING MENU*
 • ${prefix}wr
 • ${prefix}cekwr
 • ${prefix}hitungwr
 • ${prefix}infogempa
 • ${prefix}grupwa
 • ${prefix}corona
 • ${prefix}covid
 • ${prefix}cerpen
 • ${prefix}jadwaltv
 • ${prefix}salurantv
 • ${prefix}stalkgithub
 • ${prefix}pinterest
 • ${prefix}styletext
 • ${prefix}cariresep
 • ${prefix}wikimedia
 • ${prefix}gimage
 • ${prefix}kodepos
 • ${prefix}google
 • ${prefix}ringtone
 • ${prefix}gsmarena
 • ${prefix}happymod
 • ${prefix}quotesanime`
}