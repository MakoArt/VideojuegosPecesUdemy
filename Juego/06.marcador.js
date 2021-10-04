import{ctx} from './01.escenario.js'
import {tiburon,estrella,estrella2,atunes} from './02.clases.js'



 class Marcador {
      constructor(posX,posY,ancho,alto,colorCuadro,colorTexto,vidas,puntos,nivel,sonidoEstrella){
         this.posX=posX 
         this.posY=posY 
         this.ancho=ancho
         this.alto=alto 
         this.colorCuadro=colorCuadro 
         this.colorTexto=colorTexto
         this.vidas=vidas
         this.puntos=puntos
         this.nivel=nivel
         this.sonidoEstrella=new Howl({src:['sounds/jump.mp3'],loop:false})

      }

      pintaCuadro(){
         ctx.fillStyle=this.colorCuadro 
         ctx.fillRect(this.posX,this.posY,this.ancho,this.alto)
      }
      restaVidas(){
         ctx.font="bold 20px verdana"
         ctx.fillStyle="white"
         ctx.fillText(`VIDAS:${this.vidas}`,this.posX,this.posY)
      }
      sumaPuntos(){
         ctx.font="bold 20px verdana"
         ctx.fillStyle="white"
         ctx.fillText(`PUNTUACION:${this.puntos}`,this.posX,this.posY)
      }
      colisionEstrellas(){
         let calculo=Math.sqrt(Math.pow(estrella.posX-tiburon.posX,2) + Math.pow(estrella.posY-tiburon.posY,2))
         let calculo2=Math.sqrt(Math.pow(estrella2.posX-tiburon.posX,2) + Math.pow(estrella2.posY-tiburon.posY,2))
         
         
         let redondeo=Math.round(calculo)
         let redondeo2=Math.round(calculo2)

         if(redondeo>0 && redondeo<12){
            estrella.posY=1700
            this.puntos+=1
            this.sonidoEstrella.play()
         }

         if(redondeo2>0 && redondeo2<12){
            estrella2.posY=1700
            this.puntos+=1
            this.sonidoEstrella.play()
         }
         
      }

      colisionAtunes(){
         atunes.map(atun=>{
            
            let calculo=Math.sqrt(Math.pow(atun.posX-tiburon.posX,2) + Math.pow(atun.posY-tiburon.posY,2))
            let redondeo=Math.round(calculo)

            if(redondeo>0 && redondeo<12){
               this.vidas-=1
               atun.posX=830
            }
   
         
         })
      }

     

   }

export const cuadro=new Marcador(270,0,300,60)
export const vidas=new Marcador(270,20,300,80,null,null,15)
export const puntuacion=new Marcador(270,40,80,40,null,'white',null,0)


