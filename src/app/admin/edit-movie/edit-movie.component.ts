import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movieInfo;
  userProfile: Object;

  constructor(private route: ActivatedRoute, private router: Router, public service: UserService, private toastr: ToastrService) {}

  ngOnInit() {
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
    this.service.formAddMlink.reset();
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getMovie(id).subscribe(
      res => {
        console.log(res);
        this.movieInfo = res;
        localStorage.setItem('Mid', id);
        //console.log(this.movieInfo['itmLocation'][0].srcName)
      },
      err => {
        console.log(err);
      },
    );
  }

  onSubmit() {

  this.service.addMlink().subscribe(
    (res: any) => {
      if (res.succeeded==true) {
        this.service.formModel.reset();
        //console.log(res);
        localStorage.removeItem('Mid');
        this.toastr.success('New Movie Link Added!', 'Success.');
      } else {
          switch (res.errors) {
            case 'DuplicateEmail':
              //console.log(res);
              this.toastr.error('Movie Link Already Present','Unable To add.');
              break;
            default:
              console.log(res);
              this.toastr.error('Error '+ res.errors,'Movie Link Add failed.');
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
  this.service.deleteMLink(id).subscribe(res => {
      this.refreshList();
      this.toastr.warning('Link Deleted successfully', 'Success');
    },
    err => {
      console.log(err);
    },
  );
  }
}

}