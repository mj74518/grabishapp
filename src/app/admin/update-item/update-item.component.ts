import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ItemDetail } from 'src/app/shared/item-detail.model';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  itemInfo;
  userProfile: Object;
  constructor(private route: ActivatedRoute, private router: Router,public service: UserService, private toastr: ToastrService) { }

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
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getMovie(id).subscribe(
      res => {
        this.itemInfo = res;
        //console.log(this.itemInfo);
        this.itemInfo.category = this.itemInfo.category.trim();
        this.itemInfo.generes = this.itemInfo.generes.trim().split(",");
        //console.log(this.itemInfo.generes);
        this.itemInfo.itemLang = this.itemInfo.itemLang.trim().split(",");
        this.itemInfo.dateAdded = this.itemInfo.dateAdded.trim().split("T");
        this.itemInfo.dateAdded =  this.itemInfo.dateAdded[0];
        //console.log(this.itemInfo.dateAdded);
      },
      err => {
        console.log(err);
      },
    );
  }

  onSubmit(form: NgForm) {
    this.updateItem(form);
}
populateForm(itm: ItemDetail) {
  this.service.formItemDetailData = Object.assign({}, itm);
}

updateItem(form: NgForm) {
this.service.putItem(form.value).subscribe(
  res => {
    this.toastr.success('Item Updated Successfully!', 'Success.');
  },
  err => {
    console.log(err);
  },
);
}

//   onSubmit() {

//   this.service.updateitem().subscribe(
//     (res: any) => {
//       if (res.succeeded==true) {
//         this.service.formModel.reset();
//         //console.log(res);
//         this.toastr.success('Movie Added!', 'Success.');
//       } else {
//           switch (res.errors) {
//             case 'DuplicateEmail':
//               //console.log(res);
//               this.toastr.error('Movie Already Present','Unable To add.');
//               break;
//             default:
//               //console.log(res);
//               this.toastr.error('Error '+ res.errors,'Movie Add failed.');
//               break;
//           }
//       }
//     },
//     err => {
//       console.log(err);
//     }
//   );
// }

}