import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  toggle = false
  menuMainOpen: boolean = false
  close: boolean = false

  
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.toggle = !this.toggle
    if (this.toggle) {
      console.log("toogle");
      
    } else {
      console.log("!toogle");
      
    }
  }
}
