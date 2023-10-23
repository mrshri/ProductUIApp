import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interface/Product';
import { ProductService } from 'src/app/Service/product.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  products!: IProduct[];
  errMsg: string = '';
  showMsgDiv: boolean = false;
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    //its a life cycle hook
  
    this.getAllProducts();


    if (this.products == null)
  {
    this.showMsgDiv = true;
  }

  }

  getAllProducts() {
    this._productService.getProducts().subscribe(
      responseProductData => {
        this.products = responseProductData;
       
        this.showMsgDiv = false;
    
      },
      responseProductError => {
        this.products = [];
        this.errMsg = responseProductError;
        console.log(this.errMsg);
      },
      () => console.log("GetProducts method excuted successfully")
    );
  }


}
