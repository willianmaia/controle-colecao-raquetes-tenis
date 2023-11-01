import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RaqueteService } from '../../raquete.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  raquete: any;
  modoEdicao: boolean = false;
  exibindoAlertaExclusao: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private raqueteService: RaqueteService) {}

  async salvarRaquete() {
    try {
      const response = await this.raqueteService.salvarRaquete(this.raquete);
      console.log('Nova raquete cadastrada:', response);
      this.router.navigate(['/colecao']);
    } catch (error) {
      console.error('Erro ao salvar a raquete', error);
    }
  }

  async editarRaquete() {
    try {
      const response = await this.raqueteService.salvarRaqueteEditada(this.raquete);
      console.log('Raquete editada:', response);
      this.router.navigate(['/colecao']);
    } catch (error) {
      console.error('Erro ao editar a raquete', error);
    }
  }

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];
    try {
      if (id) {
        this.raquete = await this.raqueteService.obterRaquetePorId(id);
        this.modoEdicao = true;
      } else {
        this.raquete = {};
      }
    } catch (error) {
      console.error('Erro ao obter raquete por ID', error);
    }
  }

  async excluirRaquete() {
    try {
      if (this.raquete) {
        await this.raqueteService.excluirRaquete(this.raquete.id);
        console.log('Raquete excluída com sucesso');
        this.router.navigate(['/colecao']);
      }
    } catch (error) {
      console.error('Erro ao excluir a raquete', error);
    }
  }

  redirecionarParaColecao() {
    this.router.navigate(['/colecao']);
    this.exibindoAlertaExclusao = false;
  }
}
