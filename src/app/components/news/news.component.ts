import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
news:any;
  constructor() { }

  ngOnInit(): void {
    this.news = [
      { id: 1, name: 'Neymar', image: 'assets/images/person_1.jpg', date: "19/08/2020" },
      { id: 2, name: 'Messi',  image: 'assets/images/person_2.jpg', date: "20/08/2020" },
      { id: 3, name: 'Ronaldo', image: 'assets/images/person_1.jpg', date: "21/08/2020" },
      { id: 4, name: 'Ronaldo', image: 'assets/images/person_2.jpg', date: "21/08/2020" },


    ];
  }

}
