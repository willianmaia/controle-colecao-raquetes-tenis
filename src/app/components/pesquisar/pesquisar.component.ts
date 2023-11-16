import { Component } from '@angular/core';
import { RaqueteService } from '../../raquete.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent {
  nomeRaquete: string = '';
  totalRaquetesEncontradas: number = 0;
  raquetesEncontradas: any[] = [];

  constructor(private raqueteService: RaqueteService) {}

  async pesquisarRaquetesPorNome() {
    if (this.nomeRaquete) {
      try {
        const todasRaquetes = await this.raqueteService.obterRaquetes();
        const nomeDigitado = this.nomeRaquete.toLowerCase();
  
        const raquetesEncontradas = todasRaquetes.filter(raquete => raquete.nomeMarca && raquete.nomeMarca.toLowerCase() === nomeDigitado);

        console.log('Raquetes encontradas:', raquetesEncontradas);
        this.totalRaquetesEncontradas = raquetesEncontradas.length;
        this.raquetesEncontradas = raquetesEncontradas;
      } catch (error) {
        console.error('Erro ao pesquisar raquetes por nome', error);
      }
    } else {
      this.totalRaquetesEncontradas = 0;
      this.raquetesEncontradas = [];
    }
  }
  
  
  
  
  
}
