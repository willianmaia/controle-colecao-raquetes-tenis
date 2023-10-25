import { Component } from '@angular/core';
import { RaqueteService } from '../../raquete.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  raquete: any = {};

  constructor(private raqueteService: RaqueteService) {}

  cadastrarRaquete() {
    this.raqueteService.salvarRaquete(this.raquete);
    console.log('Raquete salva:', this.raquete);
    // Limpe os campos do formulário ou faça outras ações necessárias
  }
}
