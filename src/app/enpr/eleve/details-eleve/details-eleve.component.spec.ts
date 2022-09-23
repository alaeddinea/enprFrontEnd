import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEleveComponent } from './details-eleve.component';

describe('DetailsEleveComponent', () => {
  let component: DetailsEleveComponent;
  let fixture: ComponentFixture<DetailsEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
