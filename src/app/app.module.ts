/// <reference path='../../node_modules/@types/node/index.d.ts' />
import { CoreModule } from './core/core.module';
import { FeaturedQuestionComponent } from './question/featured-question/featured-question.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { UserService } from './core/user/user.service';
import { AppComponent } from './app.component';
import { QuestionModule } from './question/question.module';
import { Angular2SocialLoginModule } from 'angular2-social-login';

let SocialProviders = {
    'google': {
      'clientId': '376019749426-v72quf7sj2b3nuboc4vs8bu5dibe9n33.apps.googleusercontent.com'
    },
    // 'linkedin': {
    //   'clientId': 'LINKEDIN_CLIENT_ID'
    // },
    // 'facebook': {
    //   'clientId': 'FACEBOOK_CLIENT_ID',
    //   'apiVersion': 'v2.4'
    // }
  };


@NgModule({
  imports: [
    BrowserModule,
    QuestionModule,
    CoreModule,
    HttpModule,
    Angular2SocialLoginModule.initWithProviders(SocialProviders)
  ],
  declarations: [
    AppComponent
  ],
  exports: [ AppComponent, QuestionModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}