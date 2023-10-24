import { Component, Input } from '@angular/core';
import { Raquete } from '../../raquete.model';

@Component({
  selector: 'app-colecao',
  templateUrl: './colecao.component.html',
  styleUrls: ['./colecao.component.css']
})
export class ColecaoComponent {
  @Input() raquetes: Raquete[] = [];

  onRaqueteCadastrada(raquete: Raquete) {
    this.raquetes.push(raquete);

   
    console.log('Método onRaqueteCadastrada foi chamado com a seguinte raquete:', raquete);
  }
}
