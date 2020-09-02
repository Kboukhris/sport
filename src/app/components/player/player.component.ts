import { Router } from '@angular/router';
import { PlayerService } from './../../servicess/player.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() data:any;

  constructor(
    private router:Router,
  private playerService:PlayerService
  ) { }

  ngOnInit(): void {
  }
  goToMatch(id:number){
    this.router.navigate([`display-player/${id}`]);
    }

}
