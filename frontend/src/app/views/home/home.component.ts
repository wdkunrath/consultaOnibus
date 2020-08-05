import { Component } from '@angular/core';
import { HeaderService } from '@app/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html' })
export class HomeComponent {

    constructor(
      private headerService: HeaderService) {
      headerService.headerData = {
        title: 'Início',
        icon: 'home',
        routeUrl: 'home'
      }
    }

    ngOnInit() {

    }
}
