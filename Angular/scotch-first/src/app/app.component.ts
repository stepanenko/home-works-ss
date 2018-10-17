import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item">
          MY LOGO
        </a>
      </div>
    </div>

    <footer class="footer">
    <div class="container content has-text-centered">
      <p>Made with Love</p>
    </div>
    </footer>

  
  `,
  styles: []
})
export class AppComponent {
  title = 'scotch-first';
}
