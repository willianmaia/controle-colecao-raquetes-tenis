import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class RaqueteService {
  private raquetes: any[] = [];

  constructor() {
    this.obterRaquetesArmazenadas();
  }

  salvarRaquete(raquete: any) {
    raquete.id = uuidv4();
    this.raquetes.push(raquete);
    this.atualizarRaquetesArmazenadas();
  }

  obterRaquetes() {
    return this.raquetes;
  }

  obterRaquetePorId(id: string): any {
    return this.raquetes.find((raquete) => raquete.id === id);
  }

  salvarRaqueteEditada(raqueteEditada: any) {
    // Encontre a raquete existente com base no ID
    const index = this.raquetes.findIndex((raquete) => raquete.id === raqueteEditada.id);

    if (index !== -1) {
      this.raquetes[index] = raqueteEditada;
      this.atualizarRaquetesArmazenadas();
    }
  }

  excluirRaquete(id: string) {
    // Encontre a raquete a ser excluída com base no ID e remova-a do array.
    const index = this.raquetes.findIndex((raquete) => raquete.id === id);
    if (index !== -1) {
      this.raquetes.splice(index, 1);
      this.atualizarRaquetesArmazenadas();

    }
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

  // Método para zerar a matriz de raquetes armazenadas
  reiniciarColecao() {
    this.raquetes = [];
    this.atualizarRaquetesArmazenadas();
  }
}
