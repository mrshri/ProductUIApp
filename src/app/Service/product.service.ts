import { Injectable } from '@angular/core';
import { IProduct } from '../Interface/Product';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] = [];

  constructor(private http: HttpClient) {}


  //getting data using HTTP Request

  //GET method
  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://localhost:7243/api/Product/GetAllProducts')
      .pipe(catchError(this.errorHandler));
  }

  //ADD Method
  addProduct(addProductRequest: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>(
        'https://localhost:7243/api/Product/AddProducts',
        addProductRequest
      )
      .pipe(catchError(this.errorHandler));
  }

  //UPDATE Mathod
  getProductDetails(id: string): Observable<IProduct> {
    return this.http
      .get<IProduct>(
        'https://localhost:7243/api/Product/GetProductById?productId=' + id
      )
      .pipe(catchError(this.errorHandler));
  }

  updateProductDetails(
    id: number,
    updateProductRequest: IProduct
  ): Observable<IProduct> {
    return this.http
      .put<IProduct>(
        'https://localhost:7243/api/Product/UpdateProductUsingEFModel?productId=' + id,
        updateProductRequest
      )
      .pipe(catchError(this.errorHandler));
  }

  //DELETE Method
  deleteProduct(id: number): Observable<IProduct> {
    return this.http
      .delete<IProduct>(
        'https://localhost:7243/api/Product/DeleteProduct?productId=' + id
      )
      .pipe(catchError(this.errorHandler));
  }

//ERROR Handling
  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || 'Server Error');
  }
}
