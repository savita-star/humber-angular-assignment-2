import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProduct } from '../models/products';
import { IOrder } from '../models/orders';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  listOfProducts: IProduct[] = [];
  copyListOfProducts: IProduct[] = [];
  cartItems: IProduct[] = [];

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>('../../assets/product-data.json')
      .pipe(
        map(
          (products) =>
            (this.listOfProducts = this.copyListOfProducts = products)
        )
      );
    // http call to retrieve list of products
  }

  getOrderData(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>('../../assets/order-data.json');
    // http call to retrieve list of orders
  }

  clearCart() {
    this.cartItems = [];
  }

  addItemsToCart(item: IProduct) {
    // if (!this.cartItems.includes(item)) {
    //   this.cartItems = [...this.cartItems, item];
    // }
    this.cartItems = [...this.cartItems, item];
  }

  filterProducts(name: string) {
    if (name) {
      this.listOfProducts = this.listOfProducts.filter((listItem) =>
        listItem.name.includes(name)
      );
    } else {
      this.listOfProducts = this.copyListOfProducts;
    }
  }
}
