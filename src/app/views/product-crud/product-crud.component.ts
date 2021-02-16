import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeaderService } from 'src/app/components/template/services/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  propLegal="qualquer"

  constructor(private router: Router,private headerService : HeaderService) {
    headerService.headerData={
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl:'/products'
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}