import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFiltersStudiesComponent } from './list-filters-studies.component';

describe('ListFiltersStudiesComponent', () => {
  let component: ListFiltersStudiesComponent;
  let fixture: ComponentFixture<ListFiltersStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFiltersStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFiltersStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
