import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userProfile;
  userInfo;
  imgpath;
  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  constructor(private route: ActivatedRoute, private router: Router, public service: UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    
    var uName = localStorage.getItem('UName');

    this.service.getProfile(uName).subscribe(
      res => {
        
        this.userProfile = res;
        var utype = this.userProfile["uType"];
        if(utype.trim() == "general"){
          this.toastr.error("Uauthorized Section","Can't Access.");
          this.router.navigateByUrl('/admin/dashboard');
        }
        
      },
      err => {
        console.log(err);
      },
    );
    const usName = this.route.snapshot.paramMap.get('uname');

    this.service.getProfile(usName).subscribe(
      res => {
        var serverpath = this.service.ServerURI;
        this.userProfile = res;
        this.userInfo = res['userInfo'];
        //console.log(this.userInfo);
        var img= this.userInfo['uiPic'];
        //console.log(img);
        if(img != null){
          this.imgpath = serverpath+"/Uploads/"+img;
        }
        if(img == null){
          this.imgpath = serverpath+"/Uploads/default.jpg";
        }
      },
      err => {
        console.log(err);
      },
    );
  
  }

}
