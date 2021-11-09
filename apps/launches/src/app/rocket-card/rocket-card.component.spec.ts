import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@spacex/ui';

import { RocketCardComponent } from './rocket-card.component';

describe('RocketCardComponent', () => {
  let component: RocketCardComponent;
  let fixture: ComponentFixture<RocketCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketCardComponent ],
      imports: [UiModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});