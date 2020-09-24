import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  userDetails;
  

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
    var uName = localStorage.getItem('UName');
    this.service.getProfile(uName).subscribe(
      res => {
        this.userDetails = res;
        
        
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
