import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';


@Injectable()
export class ListaDeseosService {
    listas: Lista[]=[];
    constructor(){
        /*let lista1= new Lista('Compras');
        let lista2= new Lista('Juegos');
        let lista3= new Lista('Universidad');
        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);*/
        this.cargar();
        console.log("iniciando");
    }

    actualizar(){
        localStorage.setItem("data", JSON.stringify(this.listas));
    }

    cargar(){
        if(localStorage.getItem("data")){
            this.listas=JSON.parse(localStorage.getItem("data"));
        }
    }

    agregar(lista:Lista){
        this.listas.push(lista);
        this.actualizar();
    }

    eliminar(idx:number){
        this.listas.splice(idx, 1);
        this.actualizar();
    }
}