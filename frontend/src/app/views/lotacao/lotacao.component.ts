import { HeaderService } from '@app/services/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.css']
})
export class LotacaoComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Lista de Lotação',
      icon: 'storefront',
      routeUrl: '/lotacao'
    }
  }

  ngOnInit(): void {
  }
}
