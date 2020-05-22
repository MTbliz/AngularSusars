import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDialogUpdateComponent } from './training-dialog-update.component';

describe('TrainingDialogUpdateComponent', () => {
  let component: TrainingDialogUpdateComponent;
  let fixture: ComponentFixture<TrainingDialogUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDialogUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
