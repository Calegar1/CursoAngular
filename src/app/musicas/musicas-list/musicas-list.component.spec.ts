import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicasListComponent } from './musicas-list.component';

describe('MusicasListComponent', () => {
  let component: MusicasListComponent;
  let fixture: ComponentFixture<MusicasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
