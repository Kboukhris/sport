import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches =  [
    {id:1, teamOne:'FCB', teamTwo:'Madrid', scoreOne: 2, scoreTwo: 0},
      {id:2, teamOne:'CA', teamTwo:'EST', scoreOne: 4, scoreTwo: 1},
      {id:3, teamOne:'CSS', teamTwo:'Bizerte', scoreOne: 2, scoreTwo: 2},
      {id:4, teamOne:'ATM', teamTwo:'Bayern', scoreOne: 3, scoreTwo: 1},
      {id:4, teamOne:'Sevilla', teamTwo:'PSG', scoreOne: 0, scoreTwo: 1}
   ];
   
   let players = [
     {id: 1, name:'neymar' , poste:'attaquant' , club:'PSG' , age:'23 ans', image: 'assets/images/img_1.jpg'},
     {id: 2, name:'messi' , poste:'attaquant' , club:'FCB' , age:'30 ans' , image: 'assets/images/img_3.jpg'},
     {id: 3, name:'ronaldo' , poste:'attaquant' , club:'JUV', age:'33 ans' , image: 'assets/images/img_2.jpg'},
     {id: 4, name:'neuer' , poste:'gardien' , club:'BAY', age:'28 ans' , image: 'assets/images/img_1.jpg'}

   ];

   let users = [
     {id: 1 , first: 'khaled' , last:'boukhris' },
     {id: 2 , first: 'mohsen' , last:'ben' },
     {id: 3 , first: 'ali' , last:'ba' }
   ]

   
   return {matches,players,users};

  }
}
