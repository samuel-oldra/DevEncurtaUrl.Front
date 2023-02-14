import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() routes: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.config.forEach((route) => {
      if (!route.path) {
        return;
      }
      this.routes.push(route.path);
    });
  }
}
