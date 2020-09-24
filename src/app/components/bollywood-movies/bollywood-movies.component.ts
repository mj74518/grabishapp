import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-bollywood-movies',
  templateUrl: './bollywood-movies.component.html',
  styleUrls: ['./bollywood-movies.component.css']
})
export class BollywoodMoviesComponent implements OnInit {

  movieLatest;
  searchText;
  data: Array<any>;
  totalRecords: string;
  page: number=1;
  constructor(private router: Router, private service: UserService) {
    this.data = new Array<any>()
  }

  ngOnInit(): void {
    this.service.getLMDataBT(2).subscribe((data) =>{
      
      this.data = data;
      this.totalRecords=data.length;
      console.log(this.data);
      // console.log(this.totalRecords);

    })
  }

}
