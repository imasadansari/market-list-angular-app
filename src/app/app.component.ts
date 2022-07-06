import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'market-list';
  constructor() {
    // setTimeout(() => {
    //   this.title ="Changed TItle"
    // }, 3000);
  }
}
