import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {
  public htxt = 'happy';
  public txtArr = ['cao1', 'cao2', 'cao3'];
  constructor() { }

  ngOnInit() {
    this.htxt = 'Sick?';
  }
  makeHper() {
    this.htxt = 'happierrrrrrrrrr';
  }

}
