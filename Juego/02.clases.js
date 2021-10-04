import {ctx} from './01.escenario.js'
import {nivel1} from './01.escenario.js'





class AnimalMarino{
    constructor(isAttack,posX,posY,tileWidth,tileHeight,ruta,imageInstance,coorX,coorY,velocidad,musica){
        this.isAttack=isAttack
        this.posX=posX 
        this.posY=posY
        this.tileWidth=tileWidth
        this.tileHeight=tileHeight 
        this.ruta=ruta 
        this.imageInstance=new Image()
        this.imageInstance.src=this.ruta
        this.coorX=coorX 
        this.coorY=coorY
        this.velocidad=velocidad
        this.musica=new Howl({src:['sounds/musica.ogg'],loop:true})
        // this.musica.play()
    }
    dibuja(){
        ctx.drawImage(this.imageInstance,this.posX,this.posY,this.tileWidth,this.tileHeight)
        
    }
    moverAtunes(){
        this.posX-=this.velocidad
        if(this.posX<0){
            this.posX=830
            this.posY=tiburon.posY
        }

      
    }

 
          
      

 
    derecha(){

    

       this.coorX=parseInt(this.posX/31)
       this.coorY=parseInt(this.posY/32)

       if(nivel1[this.coorY][this.coorX]==0){
           this.posX+=5
       }


     
        
     
    }
    izquierda(){

        this.coorX=parseInt(this.posX/33)
        this.coorY=parseInt(this.posY/32)
 
        if(nivel1[this.coorY][this.coorX]==0){
            this.posX-=5
        }

       
       
     
    }
    arriba(){
     
        this.coorX=parseInt(this.posX/33)
        this.coorY=parseInt(this.posY/33)
 
        if(nivel1[this.coorY][this.coorX]==0){
            this.posY-=5
        }

      
         
         

      
      
    }
    abajo(){
          
        this.coorX=parseInt(this.posX/33)
        this.coorY=parseInt(this.posY/30)
 
        if(nivel1[this.coorY][this.coorX]==0){
            this.posY+=5
        }

    
    }

    mueveCangrejo(){
              
        
       if(this.derecha==true){
            if(this.posX<600)
               this.posX+=3
               else{
                   this.derecha=false
               }
        }
        else{
            if(this.posX>210){
            this.posX-=3
        }else{
                this.derecha=true
            }
        }
      
    
    
    }
    
    
    


  

 
}


export const tiburon=new AnimalMarino(false,75,350,32,32,'./assets/FishShark.png')
export const cangrejo=new AnimalMarino(false,300,484,32,32,'./assets/Cangrejo.png')
export const estrella=new AnimalMarino(false,640,420,32,32,'./assets/Star.png')
export const estrella2=new AnimalMarino(false,160,450,32,32,'./assets/Star.png')



//arraysInstancias
export let atunes=[]
atunes.push(new AnimalMarino(false,290,250,32,32,'./assets/TunaInvertido.png'))
atunes.push(new AnimalMarino(false,500,350,32,32,'./assets/TunaInvertido.png'))
atunes.push(new AnimalMarino(false,400,450,32,32,'./assets/TunaInvertido.png'))
atunes.push(new AnimalMarino(false,190,350,32,32,'./assets/TunaInvertido.png'))
atunes.push(new AnimalMarino(false,600,300,32,32,'./assets/TunaInvertido.png')) 

 atunes[0].velocidad=4
 atunes[1].velocidad=3
 atunes[2].velocidad=2
 atunes[3].velocidad=4
 atunes[4].velocidad=5

