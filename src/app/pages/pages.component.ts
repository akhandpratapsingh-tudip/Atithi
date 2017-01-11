import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
 // styles: [],
  template: `
    <div class="al-main">
      <div class="al-content">
      
        <router-outlet></router-outlet>
      </div>
    </div>
     `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
