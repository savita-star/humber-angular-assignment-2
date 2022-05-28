import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/products';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() product!: IProduct;
  constructor() {}

  ngOnInit(): void {}
}
