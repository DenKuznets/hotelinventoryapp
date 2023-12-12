import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // inline template
  // template: '<div>hello</div>',
  // inline styles
  // styles: [
  //   `
  //     div {
  //       background-color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
