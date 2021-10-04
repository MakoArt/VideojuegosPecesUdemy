import {protagonista} from './02.personaje.js' 
import {nivel1} from './01.Escenario.js'
 
function fisicas(x,y){

  

  let colision=false;  

  let coorX=parseInt(x/32)
  let coorY=parseInt(y/32)

     if(nivel1[coorY][coorX]==4){
         colision=true
     }

     if(nivel1[coorY][coorX]==1){
         colision=true
         
     }
     

     if(colision){
         protagonista.posY-=0
         protagonista.posY+=0 
         protagonista.posX-=0 
         protagonista.posX+=0
     }else{
         protagonista.posY+=5
     }

}




console.log(protagonista.posX)



function fisicasController(){
    requestAnimationFrame(fisicasController)
    
    fisicas(protagonista.posX+32,protagonista.posY+32)
   

}
fisicasController()