import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegimeComponent } from './list-regime.component';

describe('ListRegimeComponent', () => {
  let component: ListRegimeComponent;
  let fixture: ComponentFixture<ListRegimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRegimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
