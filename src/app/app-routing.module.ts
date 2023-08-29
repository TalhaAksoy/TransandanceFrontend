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
    path: "game",
    component: GameComponent
  },
  {
    path: "settingIcon",
    component: SettingIconComponent
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
