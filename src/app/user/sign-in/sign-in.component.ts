import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formModel = {
    Email: '',
    Password: ''
  }
  userProfile: Object;
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null){
      this.router.navigateByUrl('/admin/dashboard');
    }
  }

  onSubmit(form: NgForm) {
   this.service.login(form.value).subscribe(
    
      (res: any) => {
        console.log(res);
        var uName = res.uEmailid.split('@')[0];
        localStorage.setItem('UName', uName);
        localStorage.setItem('token', res.token);
        var uname = localStorage.getItem('UName');
        
        
        this.service.getProfile(uname).subscribe(
          res => {
            this.userProfile = res;
            console.log(this.userProfile);
            var utype = this.userProfile["uType"];
            if(utype == null){
              localStorage.setItem('UType', "general");
              this.router.navigateByUrl('/admin/user-profile');
            }
            else if(utype.trim() == "general"){
              localStorage.setItem('UType', "general");
              this.router.navigateByUrl('/admin/user-profile');
            }
            else{
              this.router.navigateByUrl('/admin/dashboard');
            }
          },
          err => {
            console.log(err);
          },
        );

        // this.service.getProfile(uName).subscribe(
        //   res => {
        //     this.userProfile = res;
        //     var uType = this.userProfile["uType"];
        //     localStorage.setItem('UType', uType);
        //   },
        //   err => {
        //     console.log(err);
        //   },
        // );
        
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect email or password.', 'Authentication failed.');
        else
        //alert("hell")
          console.log(err);
          //console.log(form.value)
      }
    );
 
  }
}
