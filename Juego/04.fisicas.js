import {nivel1,nivel2} from './01.escenario.js'
import { tiburon } from './02.clases.js'
 
function fisicas(x,y){

  


  let coorX=parseInt(x/32)
  let coorY=parseInt(y/32)

     if(nivel1[coorY][coorX]==0){
        if(tiburon.posY>230)
           tiburon.posY-=0.1
           tiburon.posX+=0.1
     }

     if(nivel2[coorY][coorX]==0){
        if(tiburon.posY>230)
           tiburon.posY-=0.1
           tiburon.posX+=0.1
     }




}








function fisicasController(){
    requestAnimationFrame(fisicasController)
    
    fisicas(tiburon.posX,tiburon.posY)
   

}
fisicasController()