import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';
import { AlertController, ToastController, NavController  } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-desesos.service';



@Component({
    selector: 'agregar-name',
    templateUrl: 'agregar.component.html',
    
})
export class AgregarComponent implements OnInit {
    nombreLista: string="";
    nombreItem: string="";

    items:ListaItem[]=[];
    constructor(public alertCtrl: AlertController,
                public toastCtrl: ToastController,
                public _listaDeseos: ListaDeseosService,
                public navCtrl: NavController) { }

    ngOnInit(): void { }

    agregar(){
        if(this.nombreItem.length==0){
            return;
        }
        let item = new ListaItem();
        item.nombre=this.nombreItem;
        this.items.push(item);
        this.nombreItem="";

    }

    borrar(id:number) {
        let confirm = this.alertCtrl.create({
            title: 'Borrar',
            message: '¿Seguro que desea hacerlo?',
            buttons: [
                'Cancelar',
            {
                text: 'Si',
                handler: () => {
                this.items.splice(id, 1);
                }
            }
            ]
        });
        confirm.present();
    }

    guardarLista(){
        if(this.nombreLista.length==0){
            let toast = this.toastCtrl.create({
                message: 'Debe darle un nombre a la lista',
                duration: 3000, 
                position: 'middle',
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
            return;
        }
        let lista=new Lista(this.nombreLista);
        lista.items=this.items;
        //this._listaDeseos.listas.push(lista);
        this._listaDeseos.agregar(lista);
        this.navCtrl.pop();
    }
}
