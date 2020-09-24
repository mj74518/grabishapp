import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  User;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.service.getUser().subscribe(
      res => {
        this.User = res;
        //console.log(res);
        //sthis.User = this.User.toString();
       
        var UEmailid = this.User.map(a => a.UEmailid);
        //console.log(this.User);
        //this.User = UEmailid;
      },
      err => {
        console.log(err);
      },
    );
  }


  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/sign-in']);
  }
}
