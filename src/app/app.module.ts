import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClienteFormComponent } from './clientes/cliente/cliente-form/cliente-form.component';
import { ClienteListaComponent } from './clientes/cliente/cliente-lista/cliente-lista.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavbarComponent } from './template/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    ClienteListaComponent,
    ConteudoComponent,
    Erro404Component,
    HomeComponent,
    LayoutComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
