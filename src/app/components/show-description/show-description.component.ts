import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.css']
})
export class ShowDescriptionComponent implements OnInit {

  showInfo;
  itemRandom;
  itemRelated;
  genre;
  checkid;
  
  constructor(private route: ActivatedRoute, private router: Router, public service: UserService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.service.FBKformModel.reset();
    //yyvar uName = localStorage.getItem('UName');
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);

    this.service.getShow(id).subscribe(
      res => {
        //console.log(res);
        this.showInfo = res;
        
        var rgeneres=this.showInfo.generes;
        var srchgenere = rgeneres.split(",")
        rgeneres = srchgenere[0];
        this.genre = rgeneres;
        this.service.getRItem(rgeneres).subscribe(
          res => {
            this.itemRelated = res;
            this.checkid= id;
            //console.log(res);
          },
          err => {
            console.log(err);
          },
        );
      },
      err => {
        console.log(err);
      },
    );

    this.service.getLatest().subscribe(
      res => {
        this.itemRandom = res;
        //console.log(res);
      },
      err => {
        console.log(err);
      },
    );
  }
  onSubmit() {
      
    var FBKItmid=this.route.snapshot.paramMap.get('id');
    localStorage.setItem('FBKItmid', FBKItmid);
    this.service.feedback().subscribe(
      (res: any) => {
        if (res.succeeded==true) {
          this.service.FBKformModel.reset();
          //console.log(res);
          this.toastr.success('Feedback/Complaint Sent!', 'Successfully.');
        } else {
            switch (res.errors) {
              default:
                //console.log(res);
              this.toastr.error('Error '+ res.errors,'Feedback/Complaint Sent failed.');
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
