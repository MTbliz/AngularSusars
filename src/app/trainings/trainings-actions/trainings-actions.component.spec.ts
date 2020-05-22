import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsActionsComponent } from './trainings-actions.component';

describe('TrainingsActionsComponent', () => {
  let component: TrainingsActionsComponent;
  let fixture: ComponentFixture<TrainingsActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
