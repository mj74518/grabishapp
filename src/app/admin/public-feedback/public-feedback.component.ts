import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-public-feedback',
  templateUrl: './public-feedback.component.html',
  styleUrls: ['./public-feedback.component.css']
})
export class PublicFeedbackComponent implements OnInit {

  User;
  Users: Array<any>;
  totalRecords: string;
  page: number=1;
  searchText;
  userProfile:Object;

  constructor(private router: Router, private service: UserService, private toastr: ToastrService) { 
    this.Users = new Array<any>()
  }

  ngOnInit(): void {
    var uName = localStorage.getItem('uType');
    var uName = localStorage.getItem('UName');

    this.service.getProfile(uName).subscribe(
      res => {
        
        this.userProfile = res;
        var utype = this.userProfile["uType"];
        if(utype == null){
          this.toastr.error("Unauthorized Section","Can't Access");
          this.router.navigateByUrl('/admin/dashboard');
        }
        else if(utype.trim() == "general"){
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
    this.service.getAFeedBK().subscribe((data) =>{
      this.Users = data;
      this.totalRecords=data.length;
      //console.log(this.Users);
    })
  }
  onDelete(id:number){
    if(confirm("Are you sure to delete this record??")){
    this.service.deleteFeedback(id).subscribe(res => {
        this.refreshList();
        this.toastr.warning('Deleted successfully', 'Success');
      },
      err => {
        console.log(err);
      },
    );
    }
  }
}
