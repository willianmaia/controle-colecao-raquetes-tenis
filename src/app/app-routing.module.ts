import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './components/sobre/sobre.component';
import { MenuComponent } from './components/menu/menu.component';
import { ColecaoComponent } from './components/colecao/colecao.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'colecao', component: ColecaoComponent },
  { path: 'pesquisar', component: PesquisarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'detalhes/:id', component: DetalhesComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
