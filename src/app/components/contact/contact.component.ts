import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any= {};
  constructor() { }

  ngOnInit(): void {
  }
  valider(){
    alert("button is clicked");
    console.log('contact object' , this.contact);
    
  }

}
