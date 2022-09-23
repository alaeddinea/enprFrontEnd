import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestpsyComponent } from './add-testpsy.component';

describe('AddTestpsyComponent', () => {
  let component: AddTestpsyComponent;
  let fixture: ComponentFixture<AddTestpsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestpsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestpsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
