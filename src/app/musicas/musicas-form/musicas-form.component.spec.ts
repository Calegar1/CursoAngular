import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicasFormComponent } from './musicas-form.component';

describe('MusicasFormComponent', () => {
  let component: MusicasFormComponent;
  let fixture: ComponentFixture<MusicasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
