import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IRocket } from '@spacex/api-interfaces';

@Component({
  selector: 'spacex-rocket-card',
  templateUrl: './rocket-card.component.html',
  styleUrls: ['./rocket-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RocketCardComponent implements OnInit {

  @Input() rocket: IRocket | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
