import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-desesos.service';
import { NavController } from 'ionic-angular';
import { Lista } from '../../app/clases';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html',
    
})
export class TerminadosComponent implements OnInit {
    constructor(private _listaDeseos : ListaDeseosService,
                private navCtrl: NavController ) { }

    ngOnInit(): void { }

    
     
    verDetalle(lista:Lista, idx:number){
        this.navCtrl.push(DetalleComponent, {lista,idx});

    }
}
