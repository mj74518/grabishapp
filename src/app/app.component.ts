import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: 'app-root',
  template: `
    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>  
  `,
  styles: []
})

export class AppComponent {
  title = 'grabish';
}
