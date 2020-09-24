import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UploadImageService } from 'src/app/shared/upload-image.service';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  userProfile;
  userInfo;
  imgpath;
  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.ChangeformModel.reset();
    var uName = localStorage.getItem('UName');
    this.service.getProfile(uName).subscribe(
      res => {
        this.userProfile = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  onSubmit() {
    var uId= this.userProfile['uId'];
    var prevPassword = this.userProfile['uPassword'];
    var uName = localStorage.getItem('UName');
    var OPassword = this.service.ChangeformModel.value.OPassword;
    if(OPassword == prevPassword){

      this.service.UpdatePassword(uId,uName).subscribe(
        (res: any) => {
          if (res==true) {
            this.service.ChangeformModel.reset();
            this.toastr.success('Password Changed!', 'Successful.');
          } else {
                this.toastr.error('Error '+ res.errors,'Registration failed.');
          }
        },
        err => {
          console.log(err);
        }
      );
    }
    else{
      this.service.ChangeformModel.reset();
      this.toastr.error('Current Password Does Not Match','Registration failed.');
    }
    
  }

}