import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  redirectUrl;

  constructor(private route: ActivatedRoute,private api: ApiService, private _tokenService: TokenService, public router: Router) { }

  ngOnInit() {
    this.redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || 'societyManagment/society';
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
            console.log("token set success fully");
            this._tokenService.setToken(r.token);
            this.router.navigateByUrl(this.redirectUrl);
            //this.router.navigate(['societyManagment','society']);
            //this.router.navigateByUrl('/societyManagment');
          }
        },
        err => {
          alert(err);
        });
  }
}
