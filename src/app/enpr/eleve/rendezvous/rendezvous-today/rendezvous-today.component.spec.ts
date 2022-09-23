import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousTodayComponent } from './rendezvous-today.component';

describe('RendezvousTodayComponent', () => {
  let component: RendezvousTodayComponent;
  let fixture: ComponentFixture<RendezvousTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezvousTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezvousTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
