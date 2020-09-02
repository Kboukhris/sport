import { PlayerService } from './../../servicess/player.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
player:any;
id:any;
  constructor(private playerService:PlayerService, 
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getplayerById(this.id).subscribe(
      y => {
        this.player = y;
      }
    )
  }

}
