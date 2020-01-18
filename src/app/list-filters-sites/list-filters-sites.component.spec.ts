import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFiltersSitesComponent } from './list-filters-sites.component';

describe('ListFiltersSitesComponent', () => {
  let component: ListFiltersSitesComponent;
  let fixture: ComponentFixture<ListFiltersSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFiltersSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFiltersSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
