import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToprowComponent } from './toprow.component';

describe('ToprowComponent', () => {
  let component: ToprowComponent;
  let fixture: ComponentFixture<ToprowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToprowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToprowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
