import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPenaliteEleveComponent } from './edit-penalite-eleve.component';

describe('EditPenaliteEleveComponent', () => {
  let component: EditPenaliteEleveComponent;
  let fixture: ComponentFixture<EditPenaliteEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPenaliteEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPenaliteEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
