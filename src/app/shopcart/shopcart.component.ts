import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {
items;
total: number = 0;
  constructor(public cartService: CartService) { }

 removeItem(i){
  this.items.splice(i,1);
}
clearCart(){
  this.items= [];
  return this.items;
};
  addMore(product){
    product.qtty ++;

  }
  addLess(product,i){
    if (product.qtty ==1){
      product.qtty --;
      this.items.splice(i,1)
      return this.items;
    }else {
      product.qtty --;
      return this.items;
    }
  }
  calcTotal() {
    let total = 0;
    for(let item of this.items){
      total = total + (item.qtty * item.price);
      // total += (item.qtty * item.price);
    }
    if (total > 200){
      return ((total)*0.9 )+ "$ (10% Discount added)";
    }
    else if (total > 500){
      return ((total)*0.8);
    }
    else{
    return (total+ "$");
  }
}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
