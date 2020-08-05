import { Component, OnInit, ViewChild } from '@angular/core';
import { Lotacao } from "@app/models/lotacao.model";
import { LotacaoService } from "@app/services/lotacao.service";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-lotacao-listar',
  templateUrl: './lotacao-listar.component.html',
  styleUrls: ['./lotacao-listar.component.css'],
})
export class LotacaoListarComponent implements OnInit {  
  
  constructor(
    private lotacaoService: LotacaoService
  ) { }

  lotacao: MatTableDataSource<any>
  searchKey: string;
  displayedColumns = ['codigo', 'nome', 'action']

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.lotacaoService.read().subscribe(lotacao => {
      this.lotacao = new MatTableDataSource(lotacao);
      this.lotacao.paginator =this.paginator;
      this.lotacao.sort = this.sort;
    });
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.lotacao.filter = this.searchKey.trim().toLowerCase();
  }
}
