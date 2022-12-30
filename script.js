function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = 19 //data.getUTCHours()

  msg.innerHTML = `Agora são ${hora} hora(s).`
  if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = 'fototarde.png'
    document.body.style.background = '#9b846f'
  } else {
    //Boa noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
  }
}
