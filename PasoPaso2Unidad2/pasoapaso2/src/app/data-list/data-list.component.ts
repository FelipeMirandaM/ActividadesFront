import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  list:Array<string> = ['Juan','Diego','Pedro','Andres']
  constructor() { }

  ngOnInit(): void {
  }

}
