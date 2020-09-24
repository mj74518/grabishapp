import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {
  userProfile : Object;

  constructor(private route: ActivatedRoute, private router: Router, public service: UserService, private toastr: ToastrService) { }

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
    this.service.formAdditem.reset();
  }

  onSubmit() {

  this.service.additem().subscribe(
    (res: any) => {
      if (res.succeeded==true) {
        this.service.formModel.reset();
        //console.log(res);
        this.toastr.success('Movie Added!', 'Success.');
      } else {
          switch (res.errors) {
            case 'DuplicateEmail':
              //console.log(res);
              this.toastr.error('Movie Already Present','Unable To add.');
              break;
            default:
              //console.log(res);
              this.toastr.error('Error '+ res.errors,'Movie Add failed.');
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