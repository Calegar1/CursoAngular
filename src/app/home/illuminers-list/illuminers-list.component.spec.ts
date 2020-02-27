import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlluminersListComponent } from './illuminers-list.component';

describe('IlluminersListComponent', () => {
  let component: IlluminersListComponent;
  let fixture: ComponentFixture<IlluminersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlluminersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlluminersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
