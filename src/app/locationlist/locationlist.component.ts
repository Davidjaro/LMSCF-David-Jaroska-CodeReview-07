import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.component.html',
  styleUrls: ['./locationlist.component.css']
})
export class LocationlistComponent implements OnInit {
products = products;
  constructor(public cartService: CartService) { }
   alertItemAdded(product){
    window.alert('Your product has been added to the Cart');
    this.cartService.addtoCart(product);
  }
  ngOnInit(){
  }

}
