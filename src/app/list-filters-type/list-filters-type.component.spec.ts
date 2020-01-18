import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFiltersTypeComponent } from './list-filters-type.component';

describe('ListFiltersTypeComponent', () => {
  let component: ListFiltersTypeComponent;
  let fixture: ComponentFixture<ListFiltersTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFiltersTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFiltersTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
