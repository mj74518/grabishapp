import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-by-quality',
  templateUrl: './by-quality.component.html',
  styleUrls: ['./by-quality.component.css']
})
export class ByQualityComponent implements OnInit {

  movieLatest;
  searchText;
  data: Array<any>;
  totalRecords: string;
  page: number=1;
  constructor(private route: ActivatedRoute, private router: Router, private service: UserService) {
    this.data = new Array<any>()
  }

  ngOnInit(): void {
    const quality = this.route.snapshot.paramMap.get('quality');
    this.service.getLDataBQ(quality).subscribe((data) =>{
      
      this.data = data;
      this.totalRecords=data.length;
      //console.log(this.data);
      // console.log(this.totalRecords);

    })
  }

}
