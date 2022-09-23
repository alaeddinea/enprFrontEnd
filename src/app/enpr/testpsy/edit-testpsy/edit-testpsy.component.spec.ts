import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestpsyComponent } from './edit-testpsy.component';

describe('EditTestpsyComponent', () => {
  let component: EditTestpsyComponent;
  let fixture: ComponentFixture<EditTestpsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTestpsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestpsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
