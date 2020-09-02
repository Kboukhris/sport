import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match:any= {};
  constructor() { }

  ngOnInit(): void {
  }
  valider(){
    alert("button is clicked");
    console.log('match object' , this.match);

  }

}
