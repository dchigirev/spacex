import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@spacex/ui';

import { CrewCardComponent } from './crew-card.component';

describe('CrewCardComponent', () => {
  let component: CrewCardComponent;
  let fixture: ComponentFixture<CrewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewCardComponent ],
      imports: [UiModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
