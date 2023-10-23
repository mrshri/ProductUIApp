import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IProduct } from 'src/app/Interface/Product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{

 addProduct:IProduct={
     productId:0,
     productName:'',
     price:0,
     category:'',
     specification:'',
     quantityAvailable:0

 }
  errMsg: string='';

 constructor(private _addProduct:ProductService,private router:Router) {}

 ngOnInit(): void {}
 
 //add method
 addProducts(){
  this._addProduct.addProduct(this.addProduct).subscribe(
    (products)=>{
      console.log(products);
      alert("Product Added Successfully!")
      this.router.navigate(['/viewProduct']);
    }
  );
 }
}


