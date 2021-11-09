import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CrewCardModule } from '../crew-card/crew-card.module';
import { LaunchCardModule } from '../launch-card/launch-card.module';
import { RocketCardModule } from '../rocket-card/rocket-card.module';

import { LaunchCardDetailedComponent } from './launch-card-detailed.component';

describe('LaunchCardDetailedComponent', () => {
  let component: LaunchCardDetailedComponent;
  let fixture: ComponentFixture<LaunchCardDetailedComponent>;
  let dialog: MatDialogRef<LaunchCardDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchCardDetailedComponent ],
      imports: [MatDialogModule, LaunchCardModule, CrewCardModule, RocketCardModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { launch: null, crew: null} }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchCardDetailedComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
