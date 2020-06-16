import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  lat : Number = 36.874875 ;
  long : Number = 10.274059
  constructor() { }

  ngOnInit(): void {
  }

}
