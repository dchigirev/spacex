import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@spacex/ui';
import { CountdownComponent } from './countdown/countdown.component';

import { LaunchCardComponent } from './launch-card.component';
import { CountdownPipe } from './_pipes';

describe('LaunchCardComponent', () => {
  let component: LaunchCardComponent;
  let fixture: ComponentFixture<LaunchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchCardComponent, CountdownPipe, CountdownComponent ],
      imports: [UiModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
