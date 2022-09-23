import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieConsultationComponent } from './suivie-consultation.component';

describe('SuivieConsultationComponent', () => {
  let component: SuivieConsultationComponent;
  let fixture: ComponentFixture<SuivieConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuivieConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivieConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
