import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-card',
  templateUrl: './char-card.component.html',
  styleUrls: ['./char-card.component.css'],
})
export class CharCardComponent implements OnInit {
  @Input() characterInfo: any;
  constructor() {}

  ngOnInit() {}
 
}
