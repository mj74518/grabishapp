import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { UploadImageService } from 'src/app/shared/upload-image.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile;
  userInfo;
  imgpath;
  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  constructor(public service: UserService, private imageService : UploadImageService, private toastr: ToastrService) { }

  ngOnInit(): void {
    var uName = localStorage.getItem('UName');

    this.service.getProfile(uName).subscribe(
      res => {
        var serverpath = this.service.ServerURI;
        this.userProfile = res;
        this.userInfo = res['userInfo'];
        //console.log(this.userInfo);
        var img= this.userInfo['uiPic'];
        this.imgpath = serverpath+"/Uploads/"+img;
      },
      err => {
        console.log(err);
      },
    );
  
  }
 
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(uiId,Image){
   this.imageService.postFile(uiId.value,this.fileToUpload).subscribe(
     data =>{
      this.toastr.success('Picture Uploaded!', 'Success.');
       Image.value = null;
       this.imageUrl = "/assets/img/default-image.png";
     }
   );
  }
  onSubmit(form: NgForm) {
      this.updateRecord(form);
  }
  populateForm(usr: User) {
    this.service.formProfileData = Object.assign({}, usr);
  }

  updateRecord(form: NgForm) {
  this.service.putUser(form.value).subscribe(
    res => {
      this.toastr.success('Profile Updated Successfully!', 'Success.');
    },
    err => {
      console.log(err);
    },
  );
  }
}
