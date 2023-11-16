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

  constructor(private router: Router, private raqueteService: RaqueteService, private fb: FormBuilder) {
    this.raqueteForm = this.fb.group({
      nomeMarca: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(300), Validators.pattern(/^[a-zA-Z0-9\s]*$/)]],
      valor: ['',[Validators.required, Validators.pattern(/^\d{1,10}(\,\d{2})?$/),],],
      link: ['', [Validators.required, Validators.maxLength(300),Validators.pattern(/^https?:\/\/\S+/)]],
      descricao: ['', [Validators.required, Validators.maxLength(300),Validators.pattern(/^[a-zA-Z0-9\s@!#$%^&*()_+.,;?]+$/)]]
    });
  }

  async executarAcao() {
    if (this.raqueteForm.valid) {
        // Lógica para cadastrar uma nova raquete
        try {
          const response = await this.raqueteService.salvarRaquete(this.raqueteForm.value);
          console.log('Nova raquete cadastrada:', response);
          this.router.navigate(['/colecao']);
        } catch (error) {
          console.error('Erro ao cadastrar nova raquete', error);
        }
      }
    }
  }

