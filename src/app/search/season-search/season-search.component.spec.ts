import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonSearchComponent } from './season-search.component';

describe('SeasonSearchComponent', () => {
  let component: SeasonSearchComponent;
  let fixture: ComponentFixture<SeasonSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
