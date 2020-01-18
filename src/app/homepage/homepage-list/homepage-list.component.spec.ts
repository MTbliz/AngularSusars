import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageListComponent } from './homepage-list.component';

describe('HomepageListComponent', () => {
  let component: HomepageListComponent;
  let fixture: ComponentFixture<HomepageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
