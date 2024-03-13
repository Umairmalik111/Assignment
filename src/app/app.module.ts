import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Import app component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminAsideComponent } from './admin-aside/admin-aside.component';
import { ContactStatisticsComponent } from './dashboard/contact-statistics/contact-statistics.component';
import { MyPerformanceComponent } from './dashboard/my-performance/my-performance.component';
import { NpsScoreComponent } from './dashboard/nps-score/nps-score.component';
import { WaitingContactsComponent } from './waiting-contacts/waiting-contacts.component';
import { AgentStatusComponent } from './agent-status/agent-status.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderComponent,
    AdminAsideComponent,
    ContactStatisticsComponent,
    MyPerformanceComponent,
    NpsScoreComponent,
    WaitingContactsComponent,
    AgentStatusComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
