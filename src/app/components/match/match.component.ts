import { MatchService } from './../../servicess/match.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CompileMetadataResolver } from '@angular/compiler';
import { Router } from '@angular/router';
​
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
​
  @Input() data:any;
  @Output() newMatches: EventEmitter<any> = new EventEmitter();
  constructor(
  private router:Router,
  private matchService:MatchService
  ) { }
​
  ngOnInit() {
    
  }
  compare(a:number,b:number){
    if (a>b) {
      return '(win)';
    }else if (a<b) {
      return '(loss)';
    }else return '(draw)';
  }
  goToMatch(id:number){
  this.router.navigate([`display-match/${id}`]);
  }
  deleteMatch(id:number){
this.matchService.deleteMatch(id).subscribe(
  () => {
    alert('match deleted');
    this.matchService.getAllMatches().subscribe(
      postDeletedMatches=> {
        this.newMatches.emit(postDeletedMatches);
      }
    )
  }
)
  }
​
}