import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
