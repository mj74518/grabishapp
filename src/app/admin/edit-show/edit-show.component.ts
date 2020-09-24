import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.css']
})
export class EditShowComponent implements OnInit {

  showInfo;
  showPath;
  userProfile: Object;

  constructor(private route: ActivatedRoute, private router: Router, public service: UserService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.refreshList();
  }

  onSubmit() {
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

    this.service.addSlink().subscribe(
      (res: any) => {
        if (res.succeeded==true) {
          this.service.formModel.reset();
          //console.log(res);
          localStorage.removeItem('Sid');
          this.toastr.success('New Episode Link Added!', 'Success.');
        } else {
            switch (res.errors) {
              case 'DuplicateEmail':
                //console.log(res);
                this.toastr.error('Episode Already Present','Unable To add.');
                break;
              default:
                console.log(res);
                this.toastr.error('Error '+ res.errors,'New Episode Add failed.');
                break;
            }
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  refreshList(){
    this.service.formAddSlink.reset();
    const id = this.route.snapshot.paramMap.get('id');
 

    this.service.getShow(id).subscribe(
      res => {
        //console.log(res);
        this.showInfo = res;
        localStorage.setItem('Sid', id);
        //console.log(this.showInfo['showLinks'][0].link1.split("/")[2])
      },
      err => {
        console.log(err);
      },
    );
  }
  onDelete(id:number){
    if(confirm("Are you sure to delete this record??")){
    this.service.deleteSLink(id).subscribe(res => {
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
