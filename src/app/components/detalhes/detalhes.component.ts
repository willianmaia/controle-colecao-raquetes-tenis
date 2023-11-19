import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RaqueteService } from '../../raquete.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  raquete: any;
  modoEdicao: boolean = false;
  exibindoAlertaExclusao: boolean = false;
  raqueteForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private raqueteService: RaqueteService,
    private fb: FormBuilder
  ) {
    this.raqueteForm = this.fb.group({
      nomeMarca: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(300), Validators.pattern(/^[a-zA-Z0-9\s]*$/)]],
      valor: ['', [Validators.required, Validators.pattern(/^\d{1,10}(\,\d{2})?$/)]],
      link: ['', [Validators.required, Validators.maxLength(300), Validators.pattern(/^https?:\/\/\S+/)]],
      descricao: ['', [Validators.required, Validators.maxLength(300), Validators.pattern(/^[a-zA-Z0-9\s@!#$%^&*()_+.,;?]+$/)]]
    });
  }

  async salvarRaquete() {
    try {
      if (this.raquete) {
        const response = await this.raqueteService.salvarRaqueteEditada(this.raqueteForm.value);
        console.log('Raquete editada com sucesso:', response);
        this.router.navigate(['/colecao']);
      }
    } catch (error) {
      console.error('Erro ao salvar a raquete editada', error);
    }
  }

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];
    try {
      if (id) {
        this.raquete = await this.raqueteService.obterRaquetePorId(id);
        this.raqueteForm.setValue({
          nomeMarca: this.raquete.nomeMarca,
          valor: this.raquete.valor,
          link: this.raquete.link,
          descricao: this.raquete.descricao,
        });

        this.modoEdicao = true;
      } else {
        this.raquete = {};
      }
    } catch (error) {
      console.error('Erro ao obter raquete por ID', error);
    }
  }

  excluirRaquete() {
    if (this.raquete) {
      this.raqueteService.excluirRaquete(this.raquete.id).subscribe(
        response => {
          console.log('Raquete excluída com sucesso');
          this.router.navigate(['/colecao']);
        },
        error => {
          console.error('Erro ao excluir a raquete', error);
        }
      );
    }
  }
  

  async editarRaquete() {
    try {
      if (this.raquete) {
        const detalhesRaquete = await this.raqueteService.obterRaquetePorId(this.raquete.id);
        this.raqueteService.setRaqueteDetalhes(detalhesRaquete);
        this.router.navigate(['/cadastrar']);
      }
    } catch (error) {
      console.error('Erro ao obter detalhes da raquete para edição', error);
    }
  }

  redirecionarParaColecao() {
    this.router.navigate(['/colecao']);
    this.exibindoAlertaExclusao = false;
  }
}
