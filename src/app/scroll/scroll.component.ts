import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import ScrollOut from 'scroll-out';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: [
    './scroll.component.scss',
    '../../../node_modules/animate.css/animate.css'
  ]
})
export class ScrollComponent implements OnInit, OnDestroy {

  so: any;

  constructor() {}

  ngOnInit() {
    this.so = ScrollOut({
      threshold: .4,
      onShown(el) {
        el.classList.add('animated', 'fadeInLeft');
      },
      onHidden: function (el) {
        // hide the element initially
        el.classList.remove('animated', 'fadeInLeft');
      }
    });
  }

  ngOnDestroy() {
    this.so.teardown();
  }
}
