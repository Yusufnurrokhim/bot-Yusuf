/*
   *
     If you find an error in writing a word / sentence please contact me
   *
*/
exports.wait = () => {
	return `\`\`\`[ ! ] Wait a moment...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` Finished ...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Broadcast Success`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` The format is wrong, try checking again in the menu`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` That's not a sticker`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Reply/tag the sticker`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` Invalid link`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` This feature is group-specific`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` Special Owner Bot`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` Sorry, your number has been blocked`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` Group admin only`
	}
exports.cariCecan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cecan`
	}
exports.cariCogan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cogan`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` Reply to the bot message`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` Reply photo`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` Tags @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` The message you replied to did not contain a reply`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Successful Change of Group Name`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Successfully Changed Group Desk`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Example ${prefix + command} text|amount`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Example ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Example ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `Make bot as admin to use this command`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\`  Failed, try again ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Activated`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Disabled`
	}
exports.notregis = (prefix, sender) => {
	return `Hai @${sender.split("@")[0]} kamu belum terdaftar di database, silahkan ketik ${prefix}verify\n\nKamu juga bisa daftar dengan cara mengirimkan kode verifikasi dari web api\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `Hai ${pushname} kamu sudah terdaftar di database`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\` Enter Numbers Correctly`
 }
exports.adminGc = () => {
 return `Because you are the admin so the bot will not log you out`
 }
 exports.izinDt = () => {
 return `Permission accepted`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Activated`
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Disabled`
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} been active before`
	}
exports.anjawaUdhOon = (command) => {
	return `Select on to activate, off to disable`
	}
exports.onORoff = (command) => {
	return `Select on to activate, off to disable`
	}
exports.gcOpen = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Successfully opened group`
	}
exports.gcClose = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Successfully Close group `
	}
exports.nsfwmo= () => {
	return `The nsfw feature has not been activated, contact the bot owner to activate it`
	}
exports.erorCode = () => {
 return `Kode yang anda masukkan salah silahkan cek kembali\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `Contact the owner to use this feature`
 }
 //vote
exports.noSesiVote = () => {
 	return`No voting session`
 }
exports.suksesDelVot = () => {
	return`Successfully Deleting Voting Session In This Group`
	}
exports.adaVoting = () => {
	return`Voting Session In Progress In This Group`
	}
exports.caraVoting = (prefix, command) => {
    return`*Voting*\n\n${prefix + command} @tag target | reason  | 1 (1 = 1 Minute)`
    }
exports.caraVot = () => {
 	return`Enter number in line 3\nContoh: 1-9999\n1 = 1 Minute`
    }
//ttt
exports.noSesiTtt = () =>{
	return`There is no tictactoe session in this group`
	}
exports.suksesDelTtt = () =>{
	return`Successfully deleted tictactoe session in this group`
	}
//on & off
exports.ownerOff = () =>{
	return`My owner has been off`
	}
exports.ownerOn = () =>{
	return`My owner is back on`
	}