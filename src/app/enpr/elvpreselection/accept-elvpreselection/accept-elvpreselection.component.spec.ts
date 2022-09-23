import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptElvpreselectionComponent } from './accept-elvpreselection.component';

describe('AcceptElvpreselectionComponent', () => {
  let component: AcceptElvpreselectionComponent;
  let fixture: ComponentFixture<AcceptElvpreselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptElvpreselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptElvpreselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
