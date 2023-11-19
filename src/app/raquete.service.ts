import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RaqueteService {
  private apiUrl = 'http://localhost:3000/raquetes';
  private raquetes: any[] = [];
  nomeRaquete: string = '';
  totalRaquetesEncontradas: number = 0;
  raquetesEncontradas: any[] = [];
  private raqueteDetalhes: any | null = null;

  constructor(private http: HttpClient) {
    this.obterRaquetesArmazenadas();
  }

  async salvarRaquete(raquete: any): Promise<any> {
    raquete.id = uuidv4();
    this.raquetes.push(raquete);
    await lastValueFrom(this.http.post(this.apiUrl, raquete));
    const response = await this.obterRaquetes();
    return response;
  }

  async obterRaquetes(): Promise<any[]> {
    const response = await lastValueFrom(this.http.get<any[]>(this.apiUrl));
    if (response) {
      this.raquetes = response;
    }
    return this.raquetes;
  }

  async obterRaquetePorId(id: string): Promise<any> {
    return lastValueFrom(this.http.get<any>(`${this.apiUrl}/${id}`));
  }

  async salvarRaqueteEditada(raqueteEditada: any): Promise<any> {
    await lastValueFrom(this.http.put(`${this.apiUrl}/${raqueteEditada.id}`, raqueteEditada));
    const response = await this.obterRaquetes();
    return response;
  }

  excluirRaquete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      switchMap(() => this.obterRaquetes())
    );
  }

  async editarRaquete(id: string, raqueteEditada: any): Promise<any> {
    await lastValueFrom(this.http.put(`${this.apiUrl}/${id}`, raqueteEditada));
    const response = await this.obterRaquetes();
    return response;
  }

  async reiniciarColecao(): Promise<any> {
    await lastValueFrom(this.http.delete(this.apiUrl));
    this.raquetes = [];
    return this.raquetes;
  }

  private obterRaquetesArmazenadas() {
    const raquetesArmazenadas = localStorage.getItem('raquetes');
    if (raquetesArmazenadas) {
      this.raquetes = JSON.parse(raquetesArmazenadas);
    }
  }

  async pesquisarRaquetesPorNome(nomeRaquete: string): Promise<any[]> {
    try {
      console.log('Pesquisando raquetes com nome:', nomeRaquete);
      const response = await lastValueFrom(this.http.get<any[]>(`${this.apiUrl}?nome=${nomeRaquete}`));
      console.log('Resultado da pesquisa:', response);
  
      return response;
    } catch (error) {
      console.error('Erro ao pesquisar raquetes por nome', error);
      return [];
    }
  }

  setRaqueteDetalhes(detalhes: any) {
    this.raqueteDetalhes = detalhes;
    localStorage.setItem('raqueteDetalhes', JSON.stringify(detalhes));
  }

  getRaqueteDetalhes(): any | null {
    if (!this.raqueteDetalhes) {
      const storedDetalhes = localStorage.getItem('raqueteDetalhes');
      if (storedDetalhes) {
        this.raqueteDetalhes = JSON.parse(storedDetalhes);
      }
    }
    return this.raqueteDetalhes;
  }

  clearRaqueteDetalhes() {
    this.raqueteDetalhes = null;
    localStorage.removeItem('raqueteDetalhes');
  }
  
}
