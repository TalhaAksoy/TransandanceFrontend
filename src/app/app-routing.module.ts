import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ChatComponent } from './component/chat/chat.component';
import { SocialComponent } from './component/social/social.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SettingsComponent } from './component/settings/settings.component';
import { GameComponent } from './component/game/game.component';
import { SettingIconComponent } from './component/settings/setting-icon/setting-icon.component';
import { InviteFriendComponent } from './component/game/invite-friend/invite-friend.component';
import { OauthComponent } from './component/oauth/oauth.component';
import { FirstLoginComponent } from './component/first-login/first-login.component';
import { GameLoadingComponent } from './component/game/game-loading/game-loading.component';
import { GameEndComponent } from './component/game/game-end/game-end.component';
import { AuthGuard } from './guards/auth.guard';
import { MatchMakingComponent } from './component/game/match-making/match-making.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:'chat',
    component: ChatComponent
  },
  {
    path: 'social',
    component: SocialComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "settingIcon",
    component: SettingIconComponent
  },
  {
    path: "game",
    component: GameComponent,
  },
  {
    path: "auth/callback",
    component: OauthComponent,
  },
  {
    path:"login/first",
    component: FirstLoginComponent
  },
  {
    path: "game/loading",
    component: GameLoadingComponent
  },
  {
    path: "game/end",
    component: GameEndComponent
  },
  {
    path: "game/matchmaking",
    component: MatchMakingComponent
  },
  {
    path:"**",
    component: NotFoundComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
