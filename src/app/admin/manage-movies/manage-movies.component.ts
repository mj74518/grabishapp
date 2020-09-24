import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-movies',
  templateUrl: './manage-movies.component.html',
  styleUrls: ['./manage-movies.component.css']
})
export class ManageMoviesComponent implements OnInit {
  Movies;
  searchText;
  userProfile:Object;
  totalRecords: string;
  page: number=1;
  public popoverTitle: string ='Popover title';
  public popoverMessage: string ='Popover description';
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private router: Router, private service: UserService, private toastr: ToastrService) {}

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
    this.service.getMovies().subscribe(
      res => {
        this.Movies = res;
        console.log(res);
        
        this.totalRecords=this.Movies.length;
      },
      err => {
        console.log(err);
      },
    );
  }
  onDelete(id:number){
    if(confirm("Are you sure to delete this record??")){
    this.service.deleteMovie(id).subscribe(res => {
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
