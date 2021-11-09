import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { tap, map, takeUntil } from 'rxjs/operators';

const INTERVAL_MS = 1000;

@Component({
  selector: 'spacex-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent implements OnInit, OnDestroy {

  @Input() time: number = 0;
  timeLeft$: Observable<number> | undefined;
  private destroyed = new Subject<any>();

  constructor() { }

  ngOnInit(): void {
    this.timeLeft$ = interval(INTERVAL_MS).pipe(
      map(() => {
        const current = new Date().getTime();
        return this.time * 1000 - current;
      }),
      tap((timeLeft) => {
        if (timeLeft < 0) {
         this.destroy();
        }
      }),
      takeUntil(this.destroyed)
    );
  }

  ngOnDestroy() {
    this.destroy();
  }

  private destroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
