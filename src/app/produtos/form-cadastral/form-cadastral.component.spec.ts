import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastralComponent } from './form-cadastral.component';

describe('FormCadastralComponent', () => {
  let component: FormCadastralComponent;
  let fixture: ComponentFixture<FormCadastralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
