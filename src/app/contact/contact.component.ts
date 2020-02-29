import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	info = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    adress: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });
  constructor() { }

  ngOnInit(){
  }

}
