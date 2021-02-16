import { Product } from './../models/product.model';

import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  /*Mock

  product: Product = {
    name: 'Produto Teste',
    price: 8.89
  }*/
  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }
  createProduct(): void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Produto Criado')
      this.router.navigate(['/products'])
    })
    
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
