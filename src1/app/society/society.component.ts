import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {
  societyId;
  constructor(public _location :Location, public _route : ActivatedRoute, public _router : Router) { }

  ngOnInit() {
    this.societyId = this._route.snapshot.paramMap.get('id');
  }
  goBack(){
    this._location.back();
  }
  goToHome(){
    this._router.navigate(['home', {societyId: this.societyId}])
  }
  goPrevious(){
    this.societyId = this.societyId -1;
    this._router.navigate(['society',this.societyId])
  }
  goNext(){
    this.societyId = Number(this.societyId) +1;
    this._router.navigate(['society',this.societyId])
  }
  goToOwner(){
    this._router.navigate(['owner'],{ relativeTo: this._route })
  }
}
