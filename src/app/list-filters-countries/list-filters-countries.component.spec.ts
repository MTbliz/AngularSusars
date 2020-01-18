import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFiltersCountriesComponent } from './list-filters-countries.component';

describe('ListFiltersCountriesComponent', () => {
  let component: ListFiltersCountriesComponent;
  let fixture: ComponentFixture<ListFiltersCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFiltersCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFiltersCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
