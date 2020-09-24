import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded==true) {
          this.service.formModel.reset();
          //console.log(res);
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
            switch (res.errors) {
              case 'DuplicateEmail':
                //console.log(res);
                this.toastr.error('Email is already taken','Registration failed.');
                break;
              default:
                //console.log(res);
              this.toastr.error('Error '+ res.errors,'Registration failed.');
                break;
            }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
