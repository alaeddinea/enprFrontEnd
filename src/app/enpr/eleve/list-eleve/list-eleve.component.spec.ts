import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEleveComponent } from './list-eleve.component';

describe('ListEleveComponent', () => {
  let component: ListEleveComponent;
  let fixture: ComponentFixture<ListEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
