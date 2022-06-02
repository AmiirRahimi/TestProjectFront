import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AccountComponent } from './account/account.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component'
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'' , component : HomeComponent},
  {path:'login' , component : AccountComponent},
  {path:'products' , component : ProductsComponent},
  {path:'product/details' , component : ProductDetailsComponent},
  {path:'**' , component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
