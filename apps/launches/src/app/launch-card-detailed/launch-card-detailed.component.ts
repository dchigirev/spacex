import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICrew, ILaunch, IRocket } from '@spacex/api-interfaces';

@Component({
  selector: 'spacex-launch-card-detailed',
  templateUrl: './launch-card-detailed.component.html',
  styleUrls: ['./launch-card-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchCardDetailedComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { launch: ILaunch, crew: ICrew[]},
  ) {}

  ngOnInit() {

  }

  get rocket(): IRocket | undefined {
    return this.data.launch && this.data.launch.details && this.data.launch.details.rocket;
  }
  

}
