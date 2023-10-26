import { Component } from '@angular/core';
import { RaqueteService } from '../../raquete.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  raqueteForm: FormGroup;
  modoEdicao: boolean = false;

  constructor(private router: Router, private raqueteService: RaqueteService, private fb: FormBuilder) {
    this.raqueteForm = this.fb.group({
      nomeMarca: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      valor: ['',[Validators.required, Validators.pattern(/^\d{1,10}(\,\d{2})?$/),],],
      link: ['', [Validators.required, Validators.maxLength(300),]],
      descricao: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  executarAcao() {
    if (this.raqueteForm.valid) {
      if (this.modoEdicao) {
        // Lógica para salvar a edição da raquete
        this.raqueteService.salvarRaqueteEditada(this.raqueteForm.value);
      } else {
        // Lógica para cadastrar uma nova raquete
        this.raqueteService.salvarRaquete(this.raqueteForm.value);
      }

      console.log(this.modoEdicao ? 'Raquete editada:' : 'Nova raquete cadastrada:', this.raqueteForm.value);
      // Após a ação, redirecione o usuário para a página de coleção
      this.router.navigate(['/colecao']);
    }
  }

}
