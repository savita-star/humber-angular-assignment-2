import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/orders';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orderItems: IOrder[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getOrderData().subscribe((orders) => {
      this.orderItems = orders;
    });
  }
}
