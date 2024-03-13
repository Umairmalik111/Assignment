import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdminAsideComponent } from './admin-aside/admin-aside.component';
import { ContactStatisticsComponent } from './dashboard/contact-statistics/contact-statistics.component';
import { MyPerformanceComponent } from './dashboard/my-performance/my-performance.component';
import { NpsScoreComponent } from './dashboard/nps-score/nps-score.component';
import { WaitingContactsComponent } from './waiting-contacts/waiting-contacts.component';
import { AgentStatusComponent } from './agent-status/agent-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, AdminAsideComponent, ContactStatisticsComponent, MyPerformanceComponent, NpsScoreComponent, WaitingContactsComponent, AgentStatusComponent],
})
export class AppComponent {
  title = 'dashboard-assignment';
}
