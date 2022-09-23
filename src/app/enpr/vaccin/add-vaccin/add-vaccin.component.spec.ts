import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVaccinComponent } from './add-vaccin.component';

describe('AddVaccinComponent', () => {
  let component: AddVaccinComponent;
  let fixture: ComponentFixture<AddVaccinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVaccinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
