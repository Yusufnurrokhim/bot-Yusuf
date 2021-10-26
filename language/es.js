/*
   *
     If you find an error in writing a word / sentence please contact me
   *
*/
exports.wait = () => {
	return `\`\`\`[ ! ] Espera un momento...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` Finalizado ...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Éxito de la transmisión`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` El formato es incorrecto, intente verificar nuevamente en el menú`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` Eso no es una pegatina`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Responder / etiquetar la pegatina`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` Enlace inválido`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` Esta función es solo para grupos`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` Bot propietario especial`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` Lo siento, tu número ha sido bloqueado`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` Solo administrador de grupo`
	}
exports.cariCecan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cecan`
	}
exports.cariCogan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cogan`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` Responder al mensaje del bot`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` Responder foto`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` Etiquetas @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` El mensaje al que respondió no contenía una respuesta`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Cambio exitoso de nombre de grupo`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Escritorio de grupo cambiado con éxito`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Ejemplo ${prefix + command} texto|Monto`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Ejemplo ${prefix + command} zeeone|ofc`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Ejemplo ${prefix + command} zeeone`
	}
exports.botNotAdm = () => {
	return `Hacer que el bot sea administrador para usar este comando`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\`  Falló, inténtalo de nuevo ^_^`
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
 return `\`\`\`[ x ]\`\`\` Ingrese los números correctamente`
 }
exports.adminGc = () => {
 return `Como eres el administrador, el bot no cerrará tu sesión.`
 }
 exports.izinDt = () => {
 return `Permiso aceptado`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Activado`
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Discapacitado`
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} estado activo antes`
	}
exports.anjawaUdhOon = (command) => {
	return `Seleccione encendido para activar, apagado para deshabilitar`
	}
exports.onORoff = (command) => {
	return `Seleccione encendido para activar, apagado para deshabilitar`
	}
exports.gcOpen = () => {
	return `\`\`\`[ ✓ ]\`\`\`  Grupo abierto con éxito`
	}
exports.gcClose = () => {
	return `\`\`\`[ ✓ ]\`\`\`  Cerrar grupo con éxito`
	}
exports.nsfwmo= () => {
	return `La función nsfw no se ha activado, comuníquese con el propietario del bot para activarla`
	}
exports.erorCode = () => {
 return `Kode yang anda masukkan salah silahkan cek kembali\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `Póngase en contacto con el propietario para utilizar esta función`
 }
 //vote
exports.noSesiVote = () => {
 	return`Sin sesión de votación`
 }
exports.suksesDelVot = () => {
	return`Eliminación exitosa de la sesión de votación en este grupo`
	}
exports.adaVoting = () => {
	return`Sesión de votación en curso en este grupo`
	}
exports.caraVoting = (prefix, command) => {
    return`*Votar*\n\n${prefix + command} @tag objetivo | razón  | 1 (1 = 1 Minuto)`
    }
exports.caraVot = () => {
 	return`ingrese el número en la línea 3\nEjemplo: 1-9999\n1 = 1 Minuto`
    }
//ttt
exports.noSesiTtt = () =>{
	return`No hay sesión de tictactoe en este grupo`
	}
exports.suksesDelTtt = () =>{
	return`Sesión de tictactoe eliminada con éxito en este grupo`
	}
//on & off
exports.ownerOff = () =>{
	return`Mi dueño se ha ido`
	}
exports.ownerOn = () =>{
	return`Mi dueño está de vuelta`
	}