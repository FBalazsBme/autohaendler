import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigstepComponent } from './configstep.component';

describe('ConfigstepComponent', () => {
  let component: ConfigstepComponent;
  let fixture: ComponentFixture<ConfigstepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigstepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
