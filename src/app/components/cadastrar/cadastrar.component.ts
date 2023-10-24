import { Component } from '@angular/core';
import { Raquete } from '../../raquete.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  raquetes: Raquete[] = [];
  raquete: Raquete = new Raquete();

  cadastrarRaquete() {
    const novaRaquete = new Raquete();
    novaRaquete.nomeMarca = this.raquete.nomeMarca;
    novaRaquete.valor = this.raquete.valor;
    novaRaquete.link = this.raquete.link;
    novaRaquete.descricao = this.raquete.descricao;
    novaRaquete.imagem = this.raquete.imagem;

    console.log('Raquete cadastrada:', novaRaquete);

    // Adicionar a raquete à matriz de raquetes
    this.raquetes.push(novaRaquete);

    // Limpar os campos do formulário após o cadastro
    this.raquete = new Raquete();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      // Você pode acessar informações sobre o arquivo, como nome e tipo.
      const fileName = file.name;
      const fileType = file.type;

      // Você pode carregar o arquivo para o servidor aqui, se necessário.
      // Para demonstração, vamos apenas armazenar o nome do arquivo.
      this.raquete.imagem = fileName;

      console.log('Arquivo selecionado:', fileName);
    }
  }
}
