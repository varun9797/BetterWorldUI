import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ApiService } from '../services/api.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  username = "sdfsdf29112";
  password = "soword";

  constructor(private api: ApiService, private _tokenService: TokenService, public router: Router) { }

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
           // alert(r.token);
            this._tokenService.setToken(r.token);
            this.router.navigateByUrl('/societyManagment');
          }
        },
        err => {
          alert(err);
        });
  }
}
