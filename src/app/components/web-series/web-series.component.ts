import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-web-series',
  templateUrl: './web-series.component.html',
  styleUrls: ['./web-series.component.css']
})
export class WebSeriesComponent implements OnInit {

  showLatest;
  searchText;
  data: Array<any>;
  totalRecords: string;
  page: number=1;
  constructor(private router: Router, private service: UserService) {
    this.data = new Array<any>()
  }

  ngOnInit(): void {
    this.service.getLSDataBT(3).subscribe((data) =>{
      
      this.data = data;
      this.totalRecords=data.length;
      //console.log(this.data);
      // console.log(this.totalRecords);

    })
  }
}