import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo:string = 'Contador';
  public numero:number=10;
/*
  public aumentar():void{
    this.numero+=1;
  }
  public disminuir():void{
    this.numero-=1;
  }
  */
 
 public base:number = 5;
 public contador(valor:number):void{
  this.numero += valor;
 }
 
}
