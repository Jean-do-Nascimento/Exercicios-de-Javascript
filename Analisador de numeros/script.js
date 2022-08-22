
    var num = document.getElementById('fnum')
    var lista = document.getElementById('flista')
    var res = document.querySelector('div#res')
    var valores = []


    const adicionar= ()=> {     //Arrow function?
      if(isNumero(num.value) && !inLista(num.value, valores)){
           valores.push(Number(num.value)) 
           let item = document.createElement('option')
           item.text = `Valor ${num.value} adicionado.`
           lista.appendChild(item)
           res.innerHTML = ''
      
      }else{
              window.alert('valor inválido ou já se encontra na lista!')
       
        
      }

 function isNumero(n){   
      if (Number(n)>=1 && Number(n)<= 100 ){
             return true
 }else{
        return false
      }

}

function inLista(n, l){  
      if( l.indexOf(Number(n)) != -1 /*diferente de inexistente*/){
         return true
      }else{
        return false
      }
}     
      num.value = ''
      num.focus()
}

function finalizar(){
  if(valores.length== 0){
    window.alert('Adicione valores!')
  }else{
      let tot = valores.length
      let soma = 0
      let media = 0
      let maior = valores[0]
      let menor = valores[0]
      for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior){
           maior = valores[pos]
          }else if(valores[pos] < menor)

          menor = valores[pos]
        }
         media = soma / tot
      

      res.innerHTML = ''
      res.innerHTML += `<p>Ao todo temos ${tot} valores cadastrados.</p>`
      res.innerHTML += `<p>O MAIOR valor informado foi ${maior}.</p>`
      res.innerHTML += `<p>O MENOR valor informado foi ${menor}.</p>`
      res.innerHTML += `<p>A soma entre os valores informados é ${soma}.</p>`
      res.innerHTML += `<p>A média entre os valores é ${media}.`
  }

}
