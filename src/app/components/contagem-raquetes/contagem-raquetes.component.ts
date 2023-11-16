import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { RaqueteService } from '../../raquete.service';

@Component({
  selector: 'app-contagem-raquetes',
  templateUrl: './contagem-raquetes.component.html',
  styleUrls: ['./contagem-raquetes.component.css']
})
export class ContagemRaquetesComponent implements AfterViewInit {
  @Input() quantidadeDeRaquetes: number | undefined;

  @ViewChild('quantidadeRaquetesElement', { static: true }) quantidadeRaquetesElement!: ElementRef;

  constructor(private raqueteService: RaqueteService) {}

  ngAfterViewInit() {
    const element = this.quantidadeRaquetesElement.nativeElement;
    console.log('Elemento com a classe quantidade-raquetes:', element);
  }
}
