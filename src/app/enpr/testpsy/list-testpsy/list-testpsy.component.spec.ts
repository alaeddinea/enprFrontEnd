import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTestpsyComponent } from './list-testpsy.component';

describe('ListTestpsyComponent', () => {
  let component: ListTestpsyComponent;
  let fixture: ComponentFixture<ListTestpsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTestpsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTestpsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
