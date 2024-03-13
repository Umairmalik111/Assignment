import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingContactsComponent } from './waiting-contacts.component';

describe('WaitingContactsComponent', () => {
  let component: WaitingContactsComponent;
  let fixture: ComponentFixture<WaitingContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitingContactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaitingContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
