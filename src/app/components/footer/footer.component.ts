import { Component } from '@angular/core';
import { RaqueteService } from '../../raquete.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = 'willianmaia@alunos.utfpr.edu.br';

  constructor(private raqueteService: RaqueteService) {}

  reiniciarColecao() {
    this.raqueteService.reiniciarColecao();
  }

}
