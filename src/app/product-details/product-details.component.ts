import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  detail : any = []

  constructor(private route : ActivatedRoute , private _accountservice : AccountService) { 
    this.route.queryParamMap.subscribe(params => {
      this._accountservice.ProductDetails(params).subscribe(response => {
        this.detail = response
      })
    })
   }

  ngOnInit(): void {
  }

}
