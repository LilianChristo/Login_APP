import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
{path: 'clientes', component:LayoutComponent, children:[
    {path: 'cliente', component:ClienteComponent},
    {path: 'cliente/:id', component:ClienteComponent},
    {path: '', redirectTo:'ClienteComponent',pathMatch:'full'},
]}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }