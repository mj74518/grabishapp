import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-tvshows',
  templateUrl: './manage-tvshows.component.html',
  styleUrls: ['./manage-tvshows.component.css']
})
export class ManageTvshowsComponent implements OnInit {
  Shows;
  totalRecords: string;
  page: number=1;
  searchText;
  userProfile: Object;

  constructor(private router: Router, private service: UserService, private toastr: ToastrService) { }

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
    this.service.getShows().subscribe(
      res => {
        this.Shows = res;
        console.log(res);
        this.totalRecords=this.Shows.length;
      },
      err => {
        console.log(err);
      },
    );
  }
  onDelete(id:number){
    if(confirm("Are you sure to delete this record??")){
    this.service.deleteShow(id).subscribe(res => {
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
