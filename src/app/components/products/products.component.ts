import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe();
  }
}
