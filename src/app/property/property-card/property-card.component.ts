import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
  @Input() property : any
 
  Property: any = 
   {  
    "ID":1,
    "Title":"Super house at calabasas",
    "Type":"House",
    "Price":"2000"
  }
  

  constructor() { }

}
