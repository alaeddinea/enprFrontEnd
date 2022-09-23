import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonelleComponent } from './list-personelle.component';

describe('ListPersonelleComponent', () => {
  let component: ListPersonelleComponent;
  let fixture: ComponentFixture<ListPersonelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
