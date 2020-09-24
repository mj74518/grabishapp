import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  User;
  Users: Array<any>;
  totalRecords: string;
  page: number=1;
  searchText;
  userProfile: Object;

  constructor(private router: Router, public service: UserService, private toastr: ToastrService) { 
    this.Users = new Array<any>()
  }

  ngOnInit(): void {
    var uName = localStorage.getItem('uType');
    var uName = localStorage.getItem('UName');

    this.service.getProfile(uName).subscribe(
      res => {
        var serverpath = this.service.ServerURI;
        this.userProfile = res;
        var utype = this.userProfile["uType"];
        if(utype == null){
          this.toastr.error("Unauthorized Section","Can't Access");
          this.router.navigateByUrl('/admin/dashboard');
        }
        else if(utype.trim() != "admin"){
          this.toastr.error("Unauthorized Section","Can't Access");
          this.router.navigateByUrl('/admin/dashboard');
        }
      },
      err => {
        console.log(err);
      },
    );

    this.refreshList();
  }

  refreshList(){
    this.service.getAUsers().subscribe((data) =>{
      
      this.Users = data;
      this.totalRecords=data.length;
      //console.log(data);

    })
  }
  
  // onSubmit() {
      
  //   //var FBKItmid=this.route.snapshot.paramMap.get('id');
  //   //localStorage.setItem('FBKItmid', FBKItmid);
  //   this.service.UAVProfile().subscribe(
  //     (res: any) => {
  //       if (res.succeeded==true) {
  //         this.service.UDformModel.reset();
  //         //console.log(res);
  //         this.toastr.success('User Updated!', 'Successfully.');
  //       } else {
  //           switch (res.errors) {
  //             default:
  //               //console.log(res);
  //             this.toastr.error('Error '+ res.errors,'User Update failed.');
  //               break;
  //           }
  //       }
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  ucoutype(id, uname, uverification){
    
    var utype= "coadmin";
    this.service.UUType(id,utype, uname, uverification).subscribe(
      (res: any) => {
        if (res==true) {
          this.refreshList();
          this.toastr.success('User Type Updated!', 'Successfully.');
        } else {
            switch (res.errors) {
              default:
              this.toastr.error('Error '+ res.errors,'User Type Update failed.');
                break;
            }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  uautype(id, uname, uverification){

    var utype= "admin";
    this.service.UUType(id,utype, uname, uverification).subscribe(
      (res: any) => {
        if (res==true) {
          this.refreshList();
          this.toastr.success('User Type Updated!', 'Successfully.');
        } else {
            switch (res.errors) {
              default:
              this.toastr.error('Error '+ res.errors,'User Type Update failed.');
                break;
            }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  ugutype(id, uname, uverification){

    var utype= "general";
    this.service.UUType(id,utype,uname, uverification).subscribe(
      (res: any) => {
        if (res==true) {
          this.refreshList()
          this.toastr.success('User Type Updated!', 'Successfully.');
        } else {
            switch (res.errors) {
              default:
              this.toastr.error('Error '+ res.errors,'User Type Update failed.');
                break;
            }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  uVverify(id, uname, utype){

    var uVerification= "verified";
    this.service.UUVerify(id,uVerification,uname, utype).subscribe(
      (res: any) => {
        if (res==true) {
          this.refreshList()
          this.toastr.success('User Verified!', 'Successfully.');
        } else {
            switch (res.errors) {
              default:
              this.toastr.error('Error '+ res.errors,'User Status Update failed.');
                break;
            }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  uPverify(id, uname, utype){

    var uVerification= "pending";
    this.service.UUVerify(id,uVerification,uname, utype).subscribe(
      (res: any) => {
        if (res==true) {
          this.refreshList()
          this.toastr.success('User Status Changed!', 'Successfully.');
        } else {
            switch (res.errors) {
              default:
              this.toastr.error('Error '+ res.errors,'User Status Update failed.');
                break;
            }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  uBverify(id, uname, utype){

    var uVerification= "blocked";
    this.service.UUVerify(id,uVerification,uname, utype).subscribe(
      (res: any) => {
        if (res==true) {
          this.refreshList()
          this.toastr.success('User Blocked!', 'Successfully.');
        } else {
            switch (res.errors) {
              default:
              this.toastr.error('Error '+ res.errors,'User Status Update failed.');
                break;
            }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  onDelete(id:number){
    if(confirm("Are you sure to delete this record??")){
    this.service.deleteUser(id).subscribe(res => {
        this.refreshList();
        this.toastr.warning('User Deleted successfully', 'Success');
      },
      err => {
        console.log(err);
      },
    );
    }
  }
}
