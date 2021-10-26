/*
   *
     If you find an error in writing a word / sentence please contact me
   *
*/
exports.wait = () => {
	return `\`\`\`[ ! ] Подождите минутку...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` Законченный ...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Успешная трансляция`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` Неправильный формат, попробуйте еще раз проверить в меню`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` Это не наклейка`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Ответить / отметить стикер`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` Неправильная ссылка`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` Специальная группа`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` Специальный бот-владелец`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` Извините, ваш номер заблокирован`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` Только администратор группы`
	}
exports.cariCecan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cecan`
	}
exports.cariCogan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cogan`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` Ответить на сообщение бота`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` Ответить фото`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` Теги @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` Сообщение, на которое вы ответили, не содержало ответа`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Успешное изменение названия группы`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Успешно измененный групповой стол`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Пример ${prefix + command} текст|количество`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Пример ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Пример ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `Сделайте бота-администратора использовать эту команду`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\`  Ошибка, попробуйте еще раз ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Антилинк активирован`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Антиссылка отключена`
	}
exports.notregis = (prefix, sender) => {
	return `Hai @${sender.split("@")[0]} kamu belum terdaftar di database, silahkan ketik ${prefix}verify\n\nKamu juga bisa daftar dengan cara mengirimkan kode verifikasi dari web api\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `Hai ${pushname} kamu sudah terdaftar di database`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\` Вводите числа правильно`
 }
exports.adminGc = () => {
 return `Потому что вы администратор, поэтому бот не выйдет из системы`
 }
 exports.izinDt = () => {
 return `Разрешение принято`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Активирован`
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Отключено`
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} был активен до`
	}
exports.anjawaUdhOon = (command) => {
	return `Включите, чтобы активировать, выключите, чтобы отключить.`
	}
exports.onORoff = (command) => {
	return `Включите, чтобы активировать, выключите, чтобы отключить.`
	}
exports.gcOpen = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Успешно открытая группа`
	}
exports.gcClose = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Успешно закрыть группу`
	}
exports.nsfwmo= () => {
	return `Функция nsfw не активирована, свяжитесь с владельцем бота, чтобы активировать ее`
	}
exports.erorCode = () => {
 return `Kode yang anda masukkan salah silahkan cek kembali\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `Свяжитесь с владельцем, чтобы использовать эту функцию`
 }
 //vote
exports.noSesiVote = () => {
 	return`Нет голосования`
 }
exports.suksesDelVot = () => {
	return`Успешное удаление сеанса голосования в этой группе`
	}
exports.adaVoting = () => {
	return`В этой группе продолжается голосование`
	}
exports.caraVoting = (prefix, command) => {
    return`*Голосование*\n\n${prefix + command} @tag цель | причина  | 1 (1 = 1 Минуты)`
    }
exports.caraVot = () => {
 	return`введите номер в строку 3\nПример: 1-9999\n1 = 1 Минуты`
    }
//ttt
exports.noSesiTtt = () =>{
	return`В этой группе нет tictactoe session`
	}
exports.suksesDelTtt = () =>{
	return`Сеанс tictactoe в этой группе успешно удален`
	}
//on & off
exports.ownerOff = () =>{
	return`Мой владелец ушел`
	}
exports.ownerOn = () =>{
	return`Мой владелец снова на`
	}