import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-manage-genre',
  templateUrl: './manage-genre.component.html',
  styleUrls: ['./manage-genre.component.css']
})
export class ManageGenreComponent implements OnInit {
  userProfile : Object;
  constructor(private route: ActivatedRoute, private router: Router, public service: UserService, private toastr: ToastrService) {}

  ngOnInit(): void {
    var uName = localStorage.getItem('uType');
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
  }

}
