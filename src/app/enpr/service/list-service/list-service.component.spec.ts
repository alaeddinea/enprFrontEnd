import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceComponent } from './list-service.component';

describe('ListServiceComponent', () => {
  let component: ListServiceComponent;
  let fixture: ComponentFixture<ListServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
