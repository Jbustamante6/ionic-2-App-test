import { ListaItem } from './lista-item';


export class Lista{
    nombre:string;
    terminado: boolean;
    items: ListaItem[];

    constructor(nombre:string){
        this.terminado = false;
        this.nombre = nombre;
    }
}