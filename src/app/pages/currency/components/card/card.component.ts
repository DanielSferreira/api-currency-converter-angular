import { Component, Input, OnInit } from '@angular/core';
import { CurrencyProperties } from 'src/app/interfaces/currency';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() data: CurrencyProperties
  ngOnInit(): void {
  }

}
