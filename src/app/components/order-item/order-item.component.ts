import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/orders';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
  @Input() order!: IOrder;

  constructor() {}

  ngOnInit(): void {}
}
