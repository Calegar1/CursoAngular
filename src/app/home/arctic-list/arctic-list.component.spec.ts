import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcticListComponent } from './arctic-list.component';

describe('ArcticListComponent', () => {
  let component: ArcticListComponent;
  let fixture: ComponentFixture<ArcticListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcticListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
