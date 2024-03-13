import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactStatisticsComponent } from './contact-statistics.component';

describe('ContactStatisticsComponent', () => {
  let component: ContactStatisticsComponent;
  let fixture: ComponentFixture<ContactStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
