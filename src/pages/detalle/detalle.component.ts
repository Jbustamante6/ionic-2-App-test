import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases';
import { ListaDeseosService } from '../../app/services/lista-desesos.service';



@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

    idx:number;
    lista:Lista;
    constructor(public navCtrl:NavController,
                public navParams:NavParams,
                public _listaDeseos: ListaDeseosService,
                public alertCtrl: AlertController,
                public toastCtrl: ToastController)             
    { 
        this.lista=this.navParams.get("lista");
        this.idx=this.navParams.get("idx");
    }

    ngOnInit(): void { }

    actualizar(item:ListaItem){
        item.completado = !item.completado;
        let todos = true;
        for(let item of this.lista.items){
            if(!item.completado){
                todos=false;
            }
        }
        this.lista.terminado=todos;
        this._listaDeseos.actualizar();

    }

    borrarItem(){
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: '¿Seguro que desea hacerlo?',
            buttons: [
             'Cancelar',
            {
                text: 'Si',
                handler: () => {
                    this._listaDeseos.eliminar(this.idx);
                    let toast = this.toastCtrl.create({
                        message: 'Se elimino la lista la lista',
                        duration: 3000, 
                        position: 'middle',
                        showCloseButton: true,
                        closeButtonText: 'Ok'
                    });
                    toast.present();
                    this.navCtrl.pop();
                }
            }
            ]
        });
        confirm.present();
    }
}
