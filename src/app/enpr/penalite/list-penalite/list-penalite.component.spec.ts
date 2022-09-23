import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPenaliteComponent } from './list-penalite.component';

describe('ListPenaliteComponent', () => {
  let component: ListPenaliteComponent;
  let fixture: ComponentFixture<ListPenaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPenaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPenaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
