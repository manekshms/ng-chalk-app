import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChalkComponent } from './ng-chalk.component';

describe('NgChalkComponent', () => {
  let component: NgChalkComponent;
  let fixture: ComponentFixture<NgChalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgChalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgChalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
