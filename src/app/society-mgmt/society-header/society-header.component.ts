import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-society-header',
  templateUrl: './society-header.component.html',
  styleUrls: ['./society-header.component.css']
})
export class SocietyHeaderComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  back(){
    this._location.back();
  }

}
