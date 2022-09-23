import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtatcivilComponent } from './list-etatcivil.component';

describe('ListEtatcivilComponent', () => {
  let component: ListEtatcivilComponent;
  let fixture: ComponentFixture<ListEtatcivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEtatcivilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtatcivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
