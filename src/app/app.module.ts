import { InboxComponent } from './inbox/inbox.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import {AlertComponent} from '../app/alert/alert.component';
import {NotificationCenterComponent} from '../app/notification center/notificationCenter.component';




const appRoutes: Routes = [
  {path: 'app-home', component: HomeComponent },
  {path: 'app-alert', component: AlertComponent },
  {path: 'app-inbox', component: InboxComponent },
  {path: 'app-notificationcenter', component: NotificationCenterComponent}
  // {path: '**', component: PageNotFoundComponent },
  // {path: '', redirectTo: '/routes/src/app/home/home.component.html' }
];

@NgModule({
  declarations: [
    AppComponent, AlertComponent, HomeComponent, InboxComponent, NotificationCenterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true   }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
