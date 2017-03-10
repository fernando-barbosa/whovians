import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ct-navbar></ct-navbar>
    <div class="app-content">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
