import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'ng-icons',
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      [attr.viewBox]="'0 0 24 24'"
      [attr.fill]="fill"
      xmlns="http://www.w3.org/2000/svg"
    >
      @switch (name) { @case ('home') {
      <path
        d="M3 10L12 3L21 10V21H3V10Z"
        [attr.stroke]="color"
        [attr.stroke-width]="strokeWidth"
      />
      } @case ('user') {
      <circle
        cx="12"
        cy="8"
        r="4"
        [attr.stroke]="color"
        [attr.stroke-width]="strokeWidth"
      />
      <path
        d="M4 21C4 16 8 14 12 14C16 14 20 16 20 21"
        [attr.stroke]="color"
        [attr.stroke-width]="strokeWidth"
      />
      } @default {
      <text x="12" y="12" text-anchor="middle" font-size="12" fill="red">
        ?
      </text>
      } }
    </svg>
  `,
  styles: [':host { display: inline-block; }'],
})
export class NgIconsComponent {
  @Input() name: 'home' | 'user' = 'home';
  @Input() size: number = 24;
  @Input() color: string = 'currentColor';
  @Input() fill: string = 'none';
  @Input() strokeWidth: number = 2;
}
