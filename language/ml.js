/*
   *
     If you find an error in writing a word / sentence please contact me
   *
*/
exports.wait = () => {
	return `\`\`\`[ ! ] ഒരു നിമിഷം കാത്തിരിക്കുക...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` പൂർത്തിയായി ...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` പ്രക്ഷേപണ വിജയം`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` ഫോർമാറ്റ് തെറ്റാണ്, മെനുവിൽ വീണ്ടും പരിശോധിക്കാൻ ശ്രമിക്കുക`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` അതൊരു സ്റ്റിക്കറല്ല`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` സ്റ്റിക്കർ മറുപടി/ടാഗ് ചെയ്യുക`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` അസാധുവായ ലിങ്ക്`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` ഈ സവിശേഷത ഗ്രൂപ്പ് മാത്രമാണ്`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` പ്രത്യേക ഉടമ ബോട്ട്`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` ക്ഷമിക്കണം, നിങ്ങളുടെ നമ്പർ തടഞ്ഞു`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` ഗ്രൂപ്പ് അഡ്മിൻ മാത്രം`
	}
exports.cariCecan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cecan`
	}
exports.cariCogan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cogan`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` ബോട്ട് സന്ദേശത്തിന് മറുപടി നൽകുക`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` ഫോട്ടോയ്ക്ക് മറുപടി നൽകുക`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` Tag @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` നിങ്ങൾ മറുപടി നൽകിയ സന്ദേശത്തിൽ ഒരു മറുപടി അടങ്ങിയിട്ടില്ല`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` ഗ്രൂപ്പിന്റെ പേരിന്റെ വിജയകരമായ മാറ്റം`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` ഗ്രൂപ്പ് ഡെസ്ക് വിജയകരമായി മാറ്റി`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` ഉദാഹരണം ${prefix + command} ടെക്സ്റ്റ്|തുക`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` ഉദാഹരണം ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` ഉദാഹരണം ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `ഈ കമാൻഡ് ഉപയോഗിക്കാൻ ബോട്ട് അഡ്മിനെ ഉണ്ടാക്കുക`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\`  പരാജയപ്പെട്ടു, വീണ്ടും ശ്രമിക്കുക ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Di Aktifkan`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Di Nonaktifkan`
	}
exports.notregis = (prefix, sender) => {
	return `Hai @${sender.split("@")[0]} kamu belum terdaftar di database, silahkan ketik ${prefix}verify\n\nKamu juga bisa daftar dengan cara mengirimkan kode verifikasi dari web api\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `Hai ${pushname} kamu sudah terdaftar di database`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\` നമ്പറുകൾ ശരിയായി നൽകുക`
 }
exports.adminGc = () => {
 return `നിങ്ങൾ അഡ്മിൻ ആയതിനാൽ ബോട്ട് നിങ്ങളെ ലോഗ് willട്ട് ചെയ്യില്ല`
 }
 exports.izinDt = () => {
 return `അനുമതി സ്വീകരിച്ചു`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} സജീവമാക്കി`
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} അപ്രാപ്തമാക്കി`
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} മുമ്പ് സജീവമായിരുന്നു`
	}
exports.anjawaUdhOon = (command) => {
	return `തിരഞ്ഞെടുക്കുക on സജീവമാക്കാൻ, off നിർജ്ജീവമാക്കാൻ`
	}
exports.onORoff = (command) => {
	return `തിരഞ്ഞെടുക്കുക on സജീവമാക്കാൻ, off നിർജ്ജീവമാക്കാൻ`
	}
exports.gcOpen = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` വിജയകരമായി തുറന്ന ഗ്രൂപ്പ്`
	}
exports.gcClose = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ഗ്രൂപ്പ് വിജയകരമായി അടയ്ക്കുക`
	}
exports.nsfwmo= () => {
	return `Nsfw സവിശേഷത സജീവമാക്കിയിട്ടില്ല, ഇത് സജീവമാക്കുന്നതിന് ബോട്ട് ഉടമയെ ബന്ധപ്പെടുക`
	}
exports.erorCode = () => {
 return `Kode yang anda masukkan salah silahkan cek kembali\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `ഈ സവിശേഷത ഉപയോഗിക്കാൻ ഉടമയുമായി ബന്ധപ്പെടുക`
 }
 //vote
exports.noSesiVote = () => {
 	return`വോട്ടിംഗ് സെഷൻ ഇല്ല`
 }
exports.suksesDelVot = () => {
	return`ഈ ഗ്രൂപ്പിലെ വോട്ടിംഗ് സെഷൻ വിജയകരമായി ഇല്ലാതാക്കുന്നു`
	}
exports.adaVoting = () => {
	return`ഈ ഗ്രൂപ്പിൽ വോട്ടിംഗ് സെഷൻ പുരോഗമിക്കുന്നു`
	}
exports.caraVoting = (prefix, command) => {
    return`*വോട്ട് ചെയ്യുക*\n\n${prefix + command} @tag ലക്ഷ്യം | കാരണം  | 1 (1 = 1 മിനിറ്റ്)`
    }
exports.caraVot = () => {
 	return`വരിയിൽ നമ്പർ നൽകുക 3\nഉദാഹരണം: 1-9999\n1 = 1 മിനിറ്റ്`
    }
//ttt
exports.noSesiTtt = () =>{
	return`ഈ ഗ്രൂപ്പിൽ ടിക്ടാക്റ്റോ സെഷൻ ഇല്ല`
	}
exports.suksesDelTtt = () =>{
	return`ഈ ഗ്രൂപ്പിലെ tictactoe സെഷൻ വിജയകരമായി ഇല്ലാതാക്കി`
	}
//on & off
exports.ownerOff = () =>{
	return`എന്റെ ഉടമ ഓഫായി`
	}
exports.ownerOn = () =>{
	return`എന്റെ ഉടമ തിരിച്ചെത്തി`
	}