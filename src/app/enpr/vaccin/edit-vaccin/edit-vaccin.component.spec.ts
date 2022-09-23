import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVaccinComponent } from './edit-vaccin.component';

describe('EditVaccinComponent', () => {
  let component: EditVaccinComponent;
  let fixture: ComponentFixture<EditVaccinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVaccinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
