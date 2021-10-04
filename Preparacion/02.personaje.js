import {ctx} from './01.Escenario.js'

class Persona{
    constructor(posX,posY,alto,ancho,color){
        this.posX=posX
        this.posY=posY 
        this.alto=alto 
        this.ancho=ancho 
        this.color=color 
    }
    dibuja(){
        ctx.fillStyle=this.color
        ctx.fillRect(this.posX,this.posY,this.ancho,this.alto)
    }
    derecha(velocidad){
        this.posX+=velocidad
    }
    izquierda(velocidad){
        this.posX-=velocidad
    }
    saltar(altura){
        this.posY-=altura
    }


}

export const protagonista=new Persona(30,120,32,32,'yellow')