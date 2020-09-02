import { DataService } from './servicess/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { EventComponent } from './components/event/event.component';
import { MatchResultComponent } from './components/match-result/match-result.component';
import { NewsComponent } from './components/news/news.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { VideoTitleComponent } from './components/video-title/video-title.component';
import { VideoComponent } from './components/video/video.component';
import { BlogTitleComponent } from './components/blog-title/blog-title.component';
import { BlogComponent } from './components/blog/blog.component';
import { SiteMobileMenuComponent } from './components/site-mobile-menu/site-mobile-menu.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { VideoContainerComponent } from './components/video-container/video-container.component';
import { LatestNewsComponent } from './components/latestnews/latest-news.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MatchComponent } from './components/match/match.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TrColorDirective } from './directives/tr-color.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServiceComponent,
    LoginComponent,
    SignUpComponent,
    AdminComponent,
    HomeComponent,
    MatchesComponent,
    EventComponent,
    MatchResultComponent,
    NewsComponent,
    CalendarComponent,
    VideoTitleComponent,
    VideoComponent,
    BlogTitleComponent,
    BlogComponent,
    SiteMobileMenuComponent,
    VideoSectionComponent,
    VideoContainerComponent,
    LatestNewsComponent,
    AddMatchComponent,
    MatchComponent,
    PlayersComponent,
    PlayerComponent,
    DisplayMatchComponent,
    DisplayPlayerComponent,
    DisplayUserComponent,
    AllUsersComponent,
    EditUserComponent,
    ReversePipe,
    TrColorDirective,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
