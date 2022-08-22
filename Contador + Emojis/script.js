function contar(){
    
   var inicio = document.getElementById('txtinicio')
   var fim = document.getElementById('txtfim')
   var passo = document.getElementById('txtpasso')
   var res = document.getElementById('res')
      if (inicio.value.length== 0|| fim.value.length==0|| passo.value.length==0){
        res.innerHTML=  'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
      }else{
        res.innerHTML= 'contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0){
            window.alert('Passo Inválido! [Considerando PASSO 1]')
            p=1
        }
          if (i<f){
             for(var c=i;c<=f;c+=p){
            res.innerHTML += ` ${c} \u{1F449} `
            
        }
          }else{
            for(c=i;c>=f;c-=p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
          }
       
        res.innerHTML += ` \u{1F3C1} `
    }
   

   
  
   
}