import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { TeamComponent } from './team/team.component';
import { InfoComponent } from './info/info.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';

import { HttpClientModule } from '@angular/common/http';

import {RegisterService} from './register.service';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HighlightsComponent,
    TeamComponent,
    InfoComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDxiZPLGF_l6dRQUp4TN2NykzUenDfoT0'
    }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
