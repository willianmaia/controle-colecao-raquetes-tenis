import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RaqueteService } from './raquete.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent} from './components/footer/footer.component';
import { NavbarComponentComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { AppRoutingModule } from './app-routing.module';
import { ColecaoComponent } from './components/colecao/colecao.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { ContagemRaquetesComponent } from './components/contagem-raquetes/contagem-raquetes.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponentComponent,
    HeaderComponent,
    MenuComponent,
    SobreComponent,
    ColecaoComponent,
    PesquisarComponent,
    CadastrarComponent,
    DetalhesComponent,
    ContagemRaquetesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RaqueteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
