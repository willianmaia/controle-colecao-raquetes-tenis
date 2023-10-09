import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponentComponent } from './components/footer/footer.component';
import { NavbarComponentComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    NavbarComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
