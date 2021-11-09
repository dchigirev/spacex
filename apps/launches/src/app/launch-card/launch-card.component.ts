import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ILaunch } from '@spacex/api-interfaces';

const DEFAULT_IMG = '/assets/space-bg.jpeg';

@Component({
  selector: 'spacex-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchCardComponent implements OnInit {

  @Input() launch: ILaunch | undefined;
  public defaultImg = DEFAULT_IMG;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  get patchImg() {
    if (!this.launch) {
      return null;
    }
    return this.launch.links.patch.small;
  }

}
