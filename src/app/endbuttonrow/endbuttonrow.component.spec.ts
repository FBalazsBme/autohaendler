import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndbuttonrowComponent } from './endbuttonrow.component';

describe('EndbuttonrowComponent', () => {
  let component: EndbuttonrowComponent;
  let fixture: ComponentFixture<EndbuttonrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndbuttonrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndbuttonrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
