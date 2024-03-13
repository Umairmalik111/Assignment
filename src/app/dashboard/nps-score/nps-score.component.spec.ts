import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsScoreComponent } from './nps-score.component';

describe('NpsScoreComponent', () => {
  let component: NpsScoreComponent;
  let fixture: ComponentFixture<NpsScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpsScoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NpsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
