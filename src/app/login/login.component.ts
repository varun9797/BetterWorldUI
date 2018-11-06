import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  username = "sdfsdf29112";
  password = "soword";

  constructor(private api: ApiService, private _customer: CustomerService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.api.login(
      this.model.uname,
      this.model.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this._customer.setToken(r.token);
            this.router.navigateByUrl('/societyManagment');
          }
        },
        r => {
          alert(r.error.error);
        });
  }
}
