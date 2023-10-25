import { Component, OnInit } from '@angular/core';
import { RaqueteService } from '../../raquete.service';


@Component({
  selector: 'app-colecao',
  templateUrl: './colecao.component.html',
  styleUrls: ['./colecao.component.css']
})
export class ColecaoComponent implements OnInit {
  raquetes: any[] = [];

  constructor(private raqueteService: RaqueteService) {}

  ngOnInit() {
    this.raquetes = this.raqueteService.obterRaquetes();
    console.log('Raquetes obtidas do serviço:', this.raquetes);
  }
}