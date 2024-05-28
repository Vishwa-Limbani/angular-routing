import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'clients', component: ClientsComponent }
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRouterModule { }