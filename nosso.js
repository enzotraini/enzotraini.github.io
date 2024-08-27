function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    // var horas = data.getHours()

    var horas = 8
    

    
    msg.innerHTML = `Agora sao ${horas} horas`
    if (horas >= 0 && horas < 12) {
        //bom dia
        img.src = "imagens/fotomanha.png"
        document.body.style.background = '#7FFFD4'
    } else if (horas >= 12 && horas < 18) {
        //boa tarde
        img.src = "imagens/fototarde.png"
        document.body.style.background = '#191970'
    } else {
         //boa noite
         img.src = "imagens/fotonoite.png"
         document.body.style.background = '#483D8B'
    }
       
}
