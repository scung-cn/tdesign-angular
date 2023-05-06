import { Component, Input } from '@angular/core';

@Component({
  selector: 'botton[t-button]',
  templateUrl: './botton.component.html',
  styleUrls: [ './botton.component.scss' ]
})
export class ButtonComponent {
  @Input()
  theme: '' | 'primary' | 'success' | 'dange' | 'warning'= 'primary';

  @Input()
  variant:'base'|'outline'|'dashed'|'text'='base';

  @Input()
  disable=false;

  @Input()
  loading=false;

  @Input()
  size:'small'|'medium'|'large' ='medium';
  
  @Input()
  shape:'reactangle'|'square'|'round'|'circle'='reactangle';
}
