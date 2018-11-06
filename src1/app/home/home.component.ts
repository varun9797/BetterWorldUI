import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navigation = [
    {"id":1, "name":"Society1"},
    {"id":2, "name":"Society2"},
    {"id":3, "name":"Society3"},
    {"id":4, "name":"Society4"}
  ]

  constructor(public router : Router) { }
  
  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigateByUrl('/society');
};
onSelect(nav) {
  this.router.navigate(['/society',nav.id]);
}

}
