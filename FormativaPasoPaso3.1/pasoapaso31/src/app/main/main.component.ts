import { IvyParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  list:Array<any> = []

  selected!:any
  total:number = 0
  iva:number = 0
  subTotal:number = 0
  cantidad!:number
  invalidammount:boolean = false
  invalidproduct:boolean = false
  mensaje:string = ""
  constructor() { }

  ngOnInit(): void {
    this.list[0] = {codigo:'0',nombre:'Pocion de mana',precio:1000}
    this.list[1] = {codigo:'1',nombre:'Pocion de vida',precio:900}
    this.list[2] = {codigo:'2',nombre:'Pocion de fuerza',precio:2000}
  }
  buy(){
    if( isNaN(this.selected)){
      this.invalidproduct = true;
      return;
    }
    if(this.cantidad>0){
        this.subTotal = this.list[this.selected].precio*this.cantidad
        this.iva = this.subTotal*0.19
        this.total = this.subTotal*1.19
        this.invalidammount = false;
        this.invalidproduct = false
        
    }
    else{
      this.invalidammount = true;
      this.mensaje = "La cantidad debe ser mayor a 0"
      this.invalidproduct = false
    }

  }

}
