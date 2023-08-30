import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SpeedDialComponent } from './component/speed-dial/speed-dial.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ChatComponent } from './component/chat/chat.component';
import { SocialComponent } from './component/social/social.component';
import { OauthComponent } from './component/oauth/oauth.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MatchHistoryComponent } from './component/profile/match-history/match-history.component';
import { SettingsComponent } from './component/settings/settings.component';
import { SettingIconComponent } from './component/settings/setting-icon/setting-icon.component';
import { GameComponent } from './component/game/game.component';
import { InviteFriendComponent } from './component/game/invite-friend/invite-friend.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SpeedDialComponent,
    NotFoundComponent,
    ChatComponent,
    SocialComponent,
    OauthComponent,
    ProfileComponent,
    MatchHistoryComponent,
    SettingsComponent,
    SettingIconComponent,
    GameComponent,
    InviteFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
