import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDialogUpdateComponent } from './team-dialog-update.component';

describe('TeamDialogUpdateComponent', () => {
  let component: TeamDialogUpdateComponent;
  let fixture: ComponentFixture<TeamDialogUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDialogUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
