import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.css']
})
export class AllShowsComponent implements OnInit {

  showLatest;
  searchText;
  data: Array<any>;
  totalRecords: string;
  page: number=1;
  constructor(private router: Router, private service: UserService) {
    this.data = new Array<any>()
  }

  ngOnInit(): void {
    this.service.getSMData().subscribe((data) =>{
      
      this.data = data;
      this.totalRecords=data.length;
      console.log(this.data);
      // console.log(this.totalRecords);

    })

    this.service.getLatest().subscribe(
      res => {
        this.showLatest = res;
        // console.log(this.totalRecords);
        //console.log(res);
      },
      err => {
        console.log(err);
      },
    );
  }

}