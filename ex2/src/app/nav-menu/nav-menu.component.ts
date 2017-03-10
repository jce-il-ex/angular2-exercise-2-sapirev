import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

   navMenu = [
    {
      id: 'Dress',
    },
    {
      id: 'Shoe',
    },
    {
      id: 'Shirt',
    },
    {
      id: 'Accessories',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
