import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPenaliteEleveComponent } from './list-penalite-eleve.component';

describe('ListPenaliteEleveComponent', () => {
  let component: ListPenaliteEleveComponent;
  let fixture: ComponentFixture<ListPenaliteEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPenaliteEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPenaliteEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
