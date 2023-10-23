import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './Components/view-product/view-product.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { AddproductComponent } from './Components/AddProduct/addproduct/addproduct.component';
import { EditProductComponent } from './Components/EditProduct/edit-product/edit-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'addProduct', component: AddproductComponent },
  { path: 'viewProduct', component: ViewProductComponent },
  { path: 'viewProduct/edit/:productId', component: EditProductComponent },
  { path: 'updateCart/:productId', component: EditProductComponent },
  { path: '**', component: HomeComponent }, //** wild card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
