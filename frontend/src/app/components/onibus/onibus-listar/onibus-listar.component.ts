import { Component, OnInit, ViewChild } from '@angular/core';
import { Onibus } from "@app/models/onibus.model";
import { OnibusService } from "@app/services/onibus.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-onibus-listar',
  templateUrl: './onibus-listar.component.html',
  styleUrls: ['./onibus-listar.component.css']
})
export class OnibusListarComponent implements OnInit {

  constructor(
    private onibusService: OnibusService
  ) { }

  onibus: MatTableDataSource<any>
  searchKey: string;
  displayedColumns = ['codigo', 'nome', 'action']

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.onibusService.read().subscribe(onibus => {
      this.onibus = new MatTableDataSource(onibus);
      this.onibus.paginator =this.paginator;
      this.onibus.sort = this.sort;
    });
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.onibus.filter = this.searchKey.trim().toLowerCase();
  }
}
