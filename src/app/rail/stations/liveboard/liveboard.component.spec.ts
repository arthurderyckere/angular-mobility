import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveboardComponent } from './liveboard.component';

describe('LiveboardComponent', () => {
  let component: LiveboardComponent;
  let fixture: ComponentFixture<LiveboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
