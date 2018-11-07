import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service"

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  ownerData;
  constructor(public _userService : UserService) { }

  ngOnInit() {
    this._userService.getAllOwners().subscribe((data)=>{
      this.ownerData = data;
    }, error =>{
      this.ownerData = error;
    });
  }

}
