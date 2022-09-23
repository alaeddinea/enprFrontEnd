import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPenaliteComponent } from './edit-penalite.component';

describe('EditPenaliteComponent', () => {
  let component: EditPenaliteComponent;
  let fixture: ComponentFixture<EditPenaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPenaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPenaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
