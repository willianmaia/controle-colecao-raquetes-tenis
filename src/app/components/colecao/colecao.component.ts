import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RaqueteService } from '../../raquete.service';

@Component({
  selector: 'app-colecao',
  templateUrl: './colecao.component.html',
  styleUrls: ['./colecao.component.css']
})
export class ColecaoComponent implements OnInit {
  raquetes: any[] = [];
  quantidadeDeRaquetes: number = 0;

  @Output() quantidadeDeRaquetesChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private raqueteService: RaqueteService) {}

  ngOnInit() {
    this.raquetes = this.raqueteService.obterRaquetes();
    this.quantidadeDeRaquetes = this.raquetes.length;
    console.log('Raquetes obtidas do serviço:', this.raquetes);
    console.log('Quantidade de raquetes:', this.quantidadeDeRaquetes);
    this.quantidadeDeRaquetesChange.emit(this.quantidadeDeRaquetes);

  }

}

