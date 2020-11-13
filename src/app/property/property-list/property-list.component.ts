import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {  
      "ID":1,
     "Title":"Super house at calabasas",
     "Type":"House",
     "Price":"2000"
   },
   {
     "ID":2,
     "Title":"II Super house at calabasas",
     "Type":"House",
     "Price":"2000"
   },
   {
     "ID":3,
     "Title":"III Super house at calabasas",
     "Type":"House",
     "Price":"2000"
   },
   {
     "ID":4,
     "Title":"IV Super house at calabasas",
     "Type":"House",
     "Price":"2000"
   }
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
