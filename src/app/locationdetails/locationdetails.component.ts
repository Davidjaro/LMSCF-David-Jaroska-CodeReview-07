import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


import { products } from '../products';


@Component({
  selector: 'app-locationdetails',
  templateUrl: './locationdetails.component.html',
  styleUrls: ['./locationdetails.component.css']
})
export class LocationdetailsComponent implements OnInit {
product;
  constructor(private route: ActivatedRoute, public cartService: CartService) { }
alertItemAdded(product){
    window.alert('Your product has been added to the Cart');
    this.cartService.addtoCart(product);
  }
  ngOnInit() {
	this.route.paramMap.subscribe(params => {
	this.product = products[+params.get('productId')];
  });
}

}
