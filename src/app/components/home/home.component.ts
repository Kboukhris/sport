import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x:string;
  result:string;
  t:any;
  maxNbr:number;
  tabNbr:number;
  user:any;
  constructor() { }

  ngOnInit(): void {
    this.result = this.moyenne(19,20,19);
    this.maxNbr = this.max([4,12,8,16]);
    //alert(this.reverseArray([4,5,6,7,8]));
    this.user = [
      {id:1, email: "test"},
      {id:2, email: "ttt@tt.tt"},
      {id:3, email: "test"},

    ]    
    for (let i = 0; i < this.user.length; i++) {
        let isValid =  this.validateEmail(this.user[i].email);
        //alert(`user email n° ${this.user[i].id} is ${isValid}`);
    }
    

    
  }

  moyenne(math:number,physique:number,info:number){
  let moy = (math*2)+(physique*3)+(info*4) /9;
  if (moy>0 && moy<8){
    return 'tf';
  }else if (moy>8 && moy<10){
    return 'f';
  
  }else if (moy>10 && moy<13){
    return 'assez bien';
  
  }else if (moy>13 && moy<16){
    return 'bien';
  
  }else if (moy>16 && moy<19){
    return 'tb';
  
  }
  else {
    return 'excellent' 
  }
}
max(t:number[]){
  let max = t[0];
  for (let i=0; i<t.length; i++){
    if(max<t[i]){
      max = t[i];
    }
  }
  return max;
}
reverseArray(t:number[]){
  let reversedArray = Array(t.length);
  for (let i = t.length-1; i>=0; i--) {
    reversedArray[t.length-1-i] = t[i];
  }
  return reversedArray;
}

 sommeNeg(T:number[]){
  let negativeArray = Array();
  for (var i=0; i<T.length; i++){
      if (T[i]<0){
        negativeArray.push[i];
      }
  }

}
 validateEmail(email:string) {
  let regExp = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

  return regExp.test(email);
}


}
