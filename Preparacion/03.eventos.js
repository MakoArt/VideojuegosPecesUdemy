import { protagonista } from "./02.personaje.js";
import {heroe} from './07.clase.js'

document.addEventListener('keydown',(e)=>{
    e.preventDefault()
    
    if(e.key==='d' || e.key==='D'){
        heroe.derecha()
    }

    if(e.key==='a' || e.key==='A'){
        heroe.izquierda()
    }

    if(e.key==='w' || e.key==='W'){
        heroe.arriba()
    }
    if(e.key==='s' || e.key==='S'){
        heroe.abajo()
    }
})