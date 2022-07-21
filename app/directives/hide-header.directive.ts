import {
  Directive,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]',
})
export class HideHeaderDirective implements OnInit {
  @Input('appHideHeader') header;
  private headerHeight = 44;
  constructor(private renderer: Renderer2, private domCtrl: DomController) {}
  ngOnInit(): void {
    this.header = this.header.el;
    // console.log(this);
    this.domCtrl.read(() => {
      this.headerHeight = this.header.clientHeight;
      if (this.headerHeight === 0) {
        location.reload();
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    const scrollTop = $event.detail.scrollTop;
    let newPosition = -(scrollTop / 5);

    if (newPosition < -this.headerHeight) {
      newPosition = -this.headerHeight;
    }
    const newOpacity = 1 - newPosition / -this.headerHeight;
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header, 'top', `${newPosition}px`);
      this.renderer.setStyle(this.header, 'opacity', newOpacity);
    });
  }
}
