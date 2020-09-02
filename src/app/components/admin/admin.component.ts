import { UserService } from './../../servicess/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 @Input() data:any;
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }
  goToMatch(id:number){
    this.router.navigate([`display-user/${id}`]);
    }

}
