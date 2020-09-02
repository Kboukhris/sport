import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl = 'api/players';

  constructor(
    private httpClient:HttpClient
  ) { }
  getAllplayeres() {
    return this.httpClient.get(this.playerUrl);
  }
  getplayerById(id:number) {
    return this.httpClient.get(`${this.playerUrl}/${id}`);
  }
  deleteplayer(id:number){
    return this.httpClient.delete(`${this.playerUrl}/${id}`);
  }
  addplayer(player:any) {
    return this.httpClient.post(this.playerUrl, player);
  }
  editplayer(player:any){
    return this.httpClient.put(`${this.playerUrl}/${player.id}`, player);
  }
}
