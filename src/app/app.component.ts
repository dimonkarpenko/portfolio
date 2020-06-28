import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit() {
    this.logoPreload()
  }

  logoPreload() {
    (document.querySelector('.logo') as HTMLElement).style.display = "block"
    setTimeout(() => {
      (document.querySelector('.logo') as HTMLElement).style.display = "none"
    }, 5000);
  }

}
