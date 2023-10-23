import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Interface/Product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productDetails: IProduct = {
    productId: 0,
    productName: '',
    price: 0,
    category: '',
    specification: '',
    quantityAvailable: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private _product: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('productId');
      if (productId) {
        //api call
        this._product.getProductDetails(productId).subscribe((responce) => {
          this.productDetails = responce;
        });
      }
    });
  }

  //update method
  updateProductDetails() {
    this._product
      .updateProductDetails(this.productDetails.productId, this.productDetails)
      .subscribe((response) => {
        console.log(response);
        alert('Product Updated Successfully');
        this.router.navigate(['/viewProduct']);
      });
  }

  //delete method
  deleteProduct(id: number) {
    this._product.deleteProduct(id).subscribe((response) => {
      console.log(response);
      console.log(this.productDetails);
      confirm('are you sure? u want to delete Product!');
      this.router.navigate(['/viewProduct']);
    });
  }
}
