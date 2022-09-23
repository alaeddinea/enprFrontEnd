import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPenaliteComponent } from './add-penalite.component';

describe('AddPenaliteComponent', () => {
  let component: AddPenaliteComponent;
  let fixture: ComponentFixture<AddPenaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPenaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPenaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
