import{ctx} from './01.Escenario.js'

class Corredor{
      constructor(posX,posY,counterX,counterY,tileWidth,tileHeight,totalWidth,totalHeight,imageInstance){

        this.posX=posX
        this.posY=posY 
        this.counterX=counterX 
        this.counterY=counterY 
        this.tileWidth=tileWidth 
        this.tileHeight=tileHeight 
        this.totalWidth=totalWidth 
        this.totalHeight=totalHeight
        this.imageInstance=new Image() 
        this.imageInstance.src='./img/player1.png'

      }
      //208 304  52 76
      dibuja(){
        ctx.drawImage(this.imageInstance,this.counterX*this.tileWidth,this.counterY*this.tileHeight,this.tileWidth,this.tileHeight,this.posX,this.posY,this.totalWidth,this.totalHeight)
      }
      derecha(){
        this.counterX+=1
        this.posX+=4 
        this.counterY=2
        if(this.counterX>3){
          this.counterX=0
        }

      }
      izquierda(){
        this.counterY=1
        this.counterX-=1
        this.posX-=3
       if(this.counterX<1){
          this.counterX=3
        }else{
          this.counterX-=1
          
        }
      }
        arriba(){
           this.posY-=4
         if(this.counterX<3 ){
           this.counterX+=1
           this.counterY=3
             if(this.posY===0){
               alert('Soy un poco tonta')
             }
         }else{
           this.counterX=0
         
         }

        }


        abajo(){
          this.posY+=3
          this.counterY=0
          if(this.counterX<3){
            this.counterX+=1
          }else{
            this.counterX=0
          }
        }
      
    }
       
      




export const heroe=new Corredor(300,200,0,0,52,76,150,137,null)
            