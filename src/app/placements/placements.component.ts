import { Component } from '@angular/core';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrl: './placements.component.css'
})
export class PlacementsComponent {
  SaveForm(myform:any):void{
    console.log(myform)
  }
}
