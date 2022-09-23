import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDelegationComponent } from './list-delegation.component';

describe('ListDelegationComponent', () => {
  let component: ListDelegationComponent;
  let fixture: ComponentFixture<ListDelegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDelegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDelegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
