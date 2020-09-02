import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any;

  constructor() { }

  ngOnInit(): void {
    this.players = [
      { id: 1, date: '20 juin 2020', image: 'assets/images/img_1.jpg', name:'neymar', team:'PSG', detail:'aaaaaaaaaaaaaa' },   
      { id: 2, date: '30 mars 2020', image: 'assets/images/img_3.jpg', name:'messi', team:'FCB' , detail:'aaaaaaaaaaaaaa'  },   
      { id: 3, date: '20 avril 2021', image: 'assets/images/img_2.jpg', name:'ronaldo', team:'Juv' , detail:'aaaaaaaaaaaaaa'  },   
      { id: 4, date: '11 aout 2020', image: 'assets/images/img_1.jpg', name:'neuer', team:'PSG' , detail:'aaaaaaaaaaaaaa'  },   



     ]

    
  }

}
