import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../property-list/IProperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
  @Input() property : IProperty;
  

  constructor() { }

}
