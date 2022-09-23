import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGouvernoratComponent } from './list-gouvernorat.component';

describe('ListGouvernoratComponent', () => {
  let component: ListGouvernoratComponent;
  let fixture: ComponentFixture<ListGouvernoratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGouvernoratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGouvernoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
