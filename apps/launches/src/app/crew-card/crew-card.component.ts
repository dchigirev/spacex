import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICrew } from '@spacex/api-interfaces';

@Component({
  selector: 'spacex-crew-card',
  templateUrl: './crew-card.component.html',
  styleUrls: ['./crew-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrewCardComponent implements OnInit {

  @Input() crew: ICrew | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
