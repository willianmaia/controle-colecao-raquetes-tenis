import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RaqueteService {
  private raquetes: any[] = [];

  constructor() {
    this.obterRaquetesArmazenadas();
  }

  salvarRaquete(raquete: any) {
    this.raquetes.push(raquete);
    this.atualizarRaquetesArmazenadas();
  }

  obterRaquetes() {
    return this.raquetes;
  }

  private atualizarRaquetesArmazenadas() {
    localStorage.setItem('raquetes', JSON.stringify(this.raquetes));
  }

  private obterRaquetesArmazenadas() {
    const raquetesArmazenadas = localStorage.getItem('raquetes');
    if (raquetesArmazenadas) {
      this.raquetes = JSON.parse(raquetesArmazenadas);
    }
  }
}
