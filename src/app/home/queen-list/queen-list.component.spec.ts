import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenListComponent } from './queen-list.component';

describe('QueenListComponent', () => {
  let component: QueenListComponent;
  let fixture: ComponentFixture<QueenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
