function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var Hora = data.getHours()    
    msg.innerHTML = `Agora são ${Hora} horas da manhã.`
    if (Hora >0 && Hora <12){
      //BOM DIA!
      document.body.style.background= "chartreuse"
      img.src= "Pexels-Manhã.jpg"
    } else if (Hora >= 12 && Hora < 18){
     //BOA TARDE!
     msg.innerHTML = `Agora são ${Hora}h - Tarde.`
     document.body.style.background= "crimson"
     img.src= "Pexels-Tarde.jpg"
    } else {
      msg.innerHTML = `Agora são ${Hora}h - Noite.`
        document.body.style.background= "indigo"
     //BOA NOITE!
     img.src= "Pexels-Noite.jpg"
    }
}


//chartreuse is a color, holy sh!t