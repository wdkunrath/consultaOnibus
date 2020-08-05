import { HeaderService } from '@app/services/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.css']
})
export class OnibusComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Lista de Lotação',
      icon: 'storefront',
      routeUrl: '/onibus'
    }
  }

  ngOnInit(): void {
  }
}
