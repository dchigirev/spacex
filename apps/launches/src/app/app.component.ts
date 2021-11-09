import { Component, OnInit } from '@angular/core';
import { ICrew, ILaunch } from '@spacex/api-interfaces';
import { Observable, Subject } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RestService } from './_services/rest.service';
import { LaunchCardDetailedComponent } from './launch-card-detailed/launch-card-detailed.component';
import { tap, withLatestFrom } from 'rxjs/operators';
@Component({
  selector: 'spacex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  launches$: Observable<ILaunch[]> = this.restService.getLaunches();;

  constructor(
    private restService: RestService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
  }

  openDetailedView(launch: ILaunch) {
    this.restService.getCrewDetails(launch.crew).subscribe(
      (crew) => this.openDialog(launch, crew)
    );
  }

  openDialog(launch?: ILaunch, crew?: ICrew[]): void {
    this.dialog.open(LaunchCardDetailedComponent, {
      width: '550px',
      data: { launch, crew },
    });
  }
}
