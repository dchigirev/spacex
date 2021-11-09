import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ILaunch } from '@spacex/api-interfaces';

@Component({
  selector: 'spacex-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchComponent implements OnInit {
  @Input() launch: ILaunch | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
