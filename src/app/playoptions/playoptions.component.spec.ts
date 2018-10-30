import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayoptionsComponent } from './playoptions.component';

describe('PlayoptionsComponent', () => {
  let component: PlayoptionsComponent;
  let fixture: ComponentFixture<PlayoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
