import { Component, OnInit  } from '@angular/core';
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
  salvarRaquete() {
    this.raqueteService.salvarRaquete(this.raquete); 
    console.log('Nova raquete cadastrada:', this.raquete);
    this.router.navigate(['/colecao']);
  }

  editarRaquete() {
    this.raqueteService.salvarRaqueteEditada(this.raquete);
    console.log('Raquete editada:', this.raquete);
  
    this.router.navigate(['/colecao']);
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.raquete = this.raqueteService.obterRaquetePorId(id);
      this.modoEdicao = true;
    }
  }

  excluirRaquete() {
    console.log('Método excluirRaquete chamado');
    this.raqueteService.excluirRaquete(this.raquete.id); 
    this.exibindoAlertaExclusao = true;
  }

  redirecionarParaColecao() {
    this.router.navigate(['/colecao']);
    this.exibindoAlertaExclusao = false;
  }

}
