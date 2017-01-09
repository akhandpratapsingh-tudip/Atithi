import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: `
      <router-outlet></router-outlet>
      `
})
export class App {
constructor() {
  }
}
