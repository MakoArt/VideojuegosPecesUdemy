import {tiburon} from './02.clases.js'


document.addEventListener('keydown',(e)=>{
    e.preventDefault()
 
    if(e.key==='d' || e.key==='D'){
        tiburon.derecha()
    }

    if(e.key==='a' || e.key==='A'){
        tiburon.izquierda()
    }

    if(e.key==='w' || e.key==='W'){
        tiburon.arriba()
    }
    if(e.key==='s' || e.key==='S'){
        tiburon.abajo()
    }
})