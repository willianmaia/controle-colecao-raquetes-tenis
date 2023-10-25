import { Component } from '@angular/core';
import { RaqueteService } from '../../raquete.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  raquete: any = {};
  modoEdicao: boolean = false;

  constructor(private router: Router, private raqueteService: RaqueteService) {}

  cadastrarRaquete() {
    this.raqueteService.salvarRaquete(this.raquete);
    console.log('Raquete salva:', this.raquete);
    // Limpe os campos do formulário ou faça outras ações necessárias
  }

  executarAcao() {
    if (this.modoEdicao) {
      // Lógica para salvar a edição da raquete
      this.raqueteService.salvarRaqueteEditada(this.raquete);
    } else {
      // Lógica para cadastrar uma nova raquete
      this.raqueteService.salvarRaquete(this.raquete);
    }
  
    console.log(this.modoEdicao ? 'Raquete editada:' : 'Nova raquete cadastrada:', this.raquete);
    // Limpe os campos do formulário ou faça outras ações necessárias
  
    // Após a ação, redirecione o usuário para a página de coleção
    this.router.navigate(['/colecao']);
  }
}
