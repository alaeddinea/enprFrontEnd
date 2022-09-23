import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicaleComponent } from './list-medicale.component';

describe('ListMedicaleComponent', () => {
  let component: ListMedicaleComponent;
  let fixture: ComponentFixture<ListMedicaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedicaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
