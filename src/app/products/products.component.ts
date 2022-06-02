import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : any = []
  constructor(private _accountservice : AccountService) { }

  ngOnInit(): void {
    this._accountservice.Products().subscribe((response ) => {
      this.products = response
      
    })
    
  }

}
