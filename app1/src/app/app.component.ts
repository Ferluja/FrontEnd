import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo:string = 'Hola Mundo';
  public saludar():void{
    alert('Hola');
  }
}
