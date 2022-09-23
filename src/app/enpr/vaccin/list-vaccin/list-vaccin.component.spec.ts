import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVaccinComponent } from './list-vaccin.component';

describe('ListVaccinComponent', () => {
  let component: ListVaccinComponent;
  let fixture: ComponentFixture<ListVaccinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVaccinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
