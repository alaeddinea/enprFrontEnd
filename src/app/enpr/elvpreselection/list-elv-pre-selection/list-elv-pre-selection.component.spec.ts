import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElvPreSelectionComponent } from './list-elv-pre-selection.component';

describe('ListElvPreSelectionComponent', () => {
  let component: ListElvPreSelectionComponent;
  let fixture: ComponentFixture<ListElvPreSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListElvPreSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElvPreSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
