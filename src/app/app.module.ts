import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProductComponent } from './Components/view-product/view-product.component';
import { ProductService } from './Service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/Home/home/home.component';
import { AddproductComponent } from './Components/AddProduct/addproduct/addproduct.component'
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './Components/EditProduct/edit-product/edit-product.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewProductComponent,
    HomeComponent,
    AddproductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
