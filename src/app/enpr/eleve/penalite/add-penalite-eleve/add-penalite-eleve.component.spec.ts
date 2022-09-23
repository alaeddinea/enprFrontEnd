import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPenaliteEleveComponent } from './add-penalite-eleve.component';

describe('AddPenaliteEleveComponent', () => {
  let component: AddPenaliteEleveComponent;
  let fixture: ComponentFixture<AddPenaliteEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPenaliteEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPenaliteEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
