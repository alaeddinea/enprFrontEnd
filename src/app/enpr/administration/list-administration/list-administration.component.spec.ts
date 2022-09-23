import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdministrationComponent } from './list-administration.component';

describe('ListAdministrationComponent', () => {
  let component: ListAdministrationComponent;
  let fixture: ComponentFixture<ListAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
