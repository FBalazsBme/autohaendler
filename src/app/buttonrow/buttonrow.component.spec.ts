import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonrowComponent } from './buttonrow.component';

describe('ButtonrowComponent', () => {
  let component: ButtonrowComponent;
  let fixture: ComponentFixture<ButtonrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
