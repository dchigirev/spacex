import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

export type IImageSize = 'md' | 'sm';

@Component({
  selector: 'spacex-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit {

  @Input() src: string | undefined;
  @Input() defaultSrc: string | undefined;
  @Input() size: IImageSize = 'md';

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  get safeURL(): SafeStyle | null {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.src || this.defaultSrc})`);
  }

}
