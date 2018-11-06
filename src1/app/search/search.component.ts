import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public _location :Location, public router:Router) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back(); 
  }

  goToHome() {
    this.router.navigate(['/home', {id: '007'}]);
  }

}
