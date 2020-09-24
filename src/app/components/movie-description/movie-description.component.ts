import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
// MatSortModule, MatTableModule } from "@angular/material";

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  movieInfo;
  moviePath;
  itemRandom;
  itemRelated;
  genre;
  checkid;

  constructor(private route: ActivatedRoute, private router: Router, public service: UserService, private toastr: ToastrService) {}

  ngOnInit(): void {

    this.service.FBKformModel.reset();

    const id = this.route.snapshot.paramMap.get('id');
    this.service.getMovie(id).subscribe(
      res => {
        this.movieInfo = res;
        //console.log(this.movieInfo)
        var rgeneres=this.movieInfo.generes;
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



