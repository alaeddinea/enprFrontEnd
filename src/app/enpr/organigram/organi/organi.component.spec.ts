import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiComponent } from './organi.component';

describe('OrganiComponent', () => {
  let component: OrganiComponent;
  let fixture: ComponentFixture<OrganiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
