import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ServiceComponent } from './components/service/service.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { PlayersComponent } from './components/players/players.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';




const routes: Routes = [
  {path :'' ,  component: HomeComponent},
  {path :'contact', component: ContactComponent},
  {path :'login' , component: LoginComponent},
  {path :'sign-up', component: SignUpComponent},
  {path: 'service', component:ServiceComponent},
  {path:'admin', component:AdminComponent},
  {path: 'matches', component:MatchesComponent},
  {path: 'add-match' , component:AddMatchComponent},
  {path: 'players' , component:PlayersComponent},
  {path:'display-match/:id' , component:DisplayMatchComponent},
  {path:'display-player/:id' , component:DisplayPlayerComponent},
  {path:'display-user/:id' , component:DisplayUserComponent},
  {path:'edit-user/:id' , component:EditUserComponent}



  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
