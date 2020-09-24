import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { timestamp } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { UserLogin } from './user-login.model';
import { ItemDetail } from './item-detail.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  formItemDetailData  : ItemDetail;
  formProfileData  : User;
  formLoginData  : UserLogin;
  list : User[];
  Profile: Observable<Object>;
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly ServerURI = 'http://localhost:5000';
  readonly BaseURI = this.ServerURI + '/api';
  ServerPath() {
    return this.BaseURI;
  }
  
  formModel = this.fb.group({
    
    UEmailid: ['', Validators.email],
    Passwords: this.fb.group({
      UPassword: ['', [Validators.required, Validators.minLength(4)]],
      UCPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  ChangeformModel = this.fb.group({
    
    OPassword: ['', Validators.required],
    Passwords: this.fb.group({
      UPassword: ['', [Validators.required, Validators.minLength(4)]],
      UCPassword: ['', Validators.required]
    }, { validator: this.compareCPasswords })

  });

  formAdditem = this.fb.group({
    
    Itemname: [''],
    Itemtype: [''],
    Itemrating: [''],
    Itemdesc: [''],
    Itemgeneres: ['', Validators.required],
    Itemcategory: [''],
    Itemstars: [''],
    Itemlang: ['', Validators.required],
    Itemposter: [''],
    Itemtrailer: [''],

  });

  formUpdateitem = this.fb.group({
    
    Itemname: [''],
    Itemtype: [''],
    Itemrating: [''],
    Itemdesc: [''],
    Itemgeneres: ['', Validators.required],
    Itemcategory: [''],
    Itemstars: [''],
    Itemlang: ['', Validators.required],
    Itemposter: [''],
    Itemtrailer: [''],

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('UCPassword');
  
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('UPassword').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      "UName" : this.formModel.value.UEmailid.split('@')[0],
      "UEmailid": this.formModel.value.UEmailid,
      "UPassword": this.formModel.value.Passwords.UPassword,
      "UVerification" : "pending"
    };
    return this.http.post(this.BaseURI + '/User/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/Token/Login', formData);
  }

  getUser() {
    return this.http.get(this.BaseURI + '/User/Index');
  }
  getUserLogindata(uName) {
    return this.http.get(this.BaseURI + '/User/Logindata/'+ uName);
  }
  getAUsers():Observable<any> {
    return this.http.get(this.BaseURI + '/User/Index');
  }

  getAFeedBK():Observable<any> {
    return this.http.get(this.BaseURI + '/User/FeedBK');
  }

  getProfile(uName) {
    return this.http.get(this.BaseURI + '/User/Profile/'+ uName);
  }

  putUser(formProfileData : User){
    return this.http.post(this.BaseURI + '/User/ProfileUP/'+ formProfileData.uiId, formProfileData);
  }

  compareCPasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('UCPassword');
  
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('UPassword').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  UpdatePassword(uId,uName) {
    
    var body = {
      "UId" : uId,
      "UName" : uName,
      "UPassword": this.ChangeformModel.value.Passwords.UPassword,
    };
    
    //console.log(body);
    return this.http.post(this.BaseURI + '/User/ChangePassword/'+ body.UId, body);
  }

  putItem(formItemDetailData : ItemDetail){
    formItemDetailData.generes = formItemDetailData.generes.toString();
    formItemDetailData.itemLang = formItemDetailData.itemLang.toString();
   return this.http.post(this.BaseURI + '/User/ItemUP/'+ formItemDetailData.itmId, formItemDetailData);
  }
  getAllmovie() {
    return this.http.get(this.BaseURI + '/User/Index');
  }
  getMovie(itmId) {
    return this.http.get(this.BaseURI + '/Movies/MovieDetail/'+ itmId);
  }
  getRItem(rgeneres) {
    return this.http.get(this.BaseURI + '/User/AllItems/BG/'+ rgeneres);
    //return this.http.get(this.BaseURI + '/Movies/RelatedMovie/'+ rgeneres);
  }

  getShow(itmId) {
    return this.http.get(this.BaseURI + '/Shows/ShowDetail/'+ itmId);
  }
  getLatest() {
    return this.http.get(this.BaseURI + '/User/AllItems/');
  }
  getLData():Observable<any> {
    return this.http.get(this.BaseURI + '/User/AllItems/');
  }
  
  getLDataBG(genre: string):Observable<any> {
    return this.http.get(this.BaseURI + '/User/AllItems/BG/'+ genre);
  }

  getLDataBQ(quality: string):Observable<any> {
    return this.http.get(this.BaseURI + '/User/AllItems/BQ/'+ quality);
  }

  getLDataBY(year: string):Observable<any> {
    return this.http.get(this.BaseURI + '/User/AllItems/BY/'+ year);
  }

  getLDataBYR(year1: string,year2: string):Observable<any> {
    return this.http.get(this.BaseURI + '/User/AllItems/BYR/'+ year1 +'&' +year2);
  }

  getLMData():Observable<any> {
    return this.http.get(this.BaseURI + '/Movies/AllMovies/');
  }
  getLMDataBT(id : number):Observable<any> {
    return this.http.get(this.BaseURI + '/Movies/AllMovies/'+ id);
  }

  getSMData():Observable<any> {
    return this.http.get(this.BaseURI + '/Shows/AllShows/');
  }

  getLSDataBT(id : number):Observable<any> {
    
    //console.log(this.BaseURI + '/Shows/AllShows/'+ id);
    return this.http.get(this.BaseURI + '/Shows/AllShows/'+ id);
  }

  // "TimeAdded": new Date().toJSON().split("T")[1].split(".")[0],
  additem() {
    var body = {
      "ItmName" : this.formAdditem.value.Itemname,
      "TypeId": this.formAdditem.value.Itemtype,
      "DateAdded": new Date().toDateString(),
      "TimeAdded": new Date().toTimeString().split(" ")[0],
      "ImdbRatings": this.formAdditem.value.Itemrating,
      "ShowDesc": this.formAdditem.value.Itemdesc,
      
      "Generes": this.formAdditem.value.Itemgeneres.join(","),
      "Category": this.formAdditem.value.Itemcategory,
      "Stars": this.formAdditem.value.Itemstars,
      "ItemLang": this.formAdditem.value.Itemlang.join(","),
      "PosterImg": this.formAdditem.value.Itemposter,
      "TrailerUrl": this.formAdditem.value.Itemtrailer
    };
    //console.log(body);
    return this.http.post(this.BaseURI + '/User/InfoAdd', body);
    // return this.http.post(`${this.BaseURI}/Student/Register`, body);
  }

  updateItem(formItemDetailData : ItemDetail){
    //console.log(this.BaseURI + '/User/ProfileUP/' + formProfileData.uiId, formProfileData);
    return this.http.post(this.BaseURI + '/User/InfoUP/'+ formItemDetailData.itmId, formItemDetailData);
    
    //return this.http.post(this.BaseURI + '/User/InfoAdd', body);
   
  }

  getMovies() {
    return this.http.get(this.BaseURI + '/Movies/AllMovies');
  }

  getShows() {
    return this.http.get(this.BaseURI + '/Shows/AllShows');
  }

  formAddMlink = this.fb.group({
    
    Itemres: ['', Validators.required],
    Itemsize: ['', Validators.required],
    link1: ['', Validators.required],
    link2: ['', Validators.required],
    link3: ['', Validators.required],
    link4: ['', Validators.required],
    link5: ['', Validators.required],
    link6: ['', Validators.required],
    Resunit: ['', Validators.required]

  });

  addMlink() {
    var body = {
      "itmId" : localStorage.getItem('Mid'),
      "Itemres" : this.formAddMlink.value.Itemres,
      "Itemsize": this.formAddMlink.value.Itemsize + " " + this.formAddMlink.value.Resunit,
      "link1": this.formAddMlink.value.link1,
      "link2": this.formAddMlink.value.link2,
      "link3": this.formAddMlink.value.link3,
      "link4": this.formAddMlink.value.link4,
      "link5": this.formAddMlink.value.link5,
      "link6": this.formAddMlink.value.link6
      
    };
    return this.http.post(this.BaseURI + '/Movies/MLinkAdd', body);
  }

  formAddSlink = this.fb.group({
   
    Season: ['', Validators.required],
    Episode: ['', Validators.required],
    Showres: ['', Validators.required],
    Showsize: ['', Validators.required],
    Link1: ['', Validators.required],
    Link2: ['', Validators.required],
    Link3: ['', Validators.required],
    Link4: ['', Validators.required],
    Link5: ['', Validators.required],
    Link6: ['', Validators.required],
    Resunit: ['', Validators.required]

  });

  addSlink() {
    var body = {
      "itmId" : localStorage.getItem('Sid'),
      "seasonNo" : this.formAddSlink.value.Season,
      "episodeNo" : this.formAddSlink.value.Episode,
      "showRes" : this.formAddSlink.value.Showres,
      "showSize": this.formAddSlink.value.Showsize + " " + this.formAddSlink.value.Resunit,
      "Link1": this.formAddSlink.value.Link1,
      "Link2": this.formAddSlink.value.Link2,
      "Link3": this.formAddSlink.value.Link3,
      "Link4": this.formAddSlink.value.Link4,
      "Link5": this.formAddSlink.value.Link5,
      "Link6": this.formAddSlink.value.Link6
      
    };
    return this.http.post(this.BaseURI + '/Shows/SLinkAdd/', body);
  }

  FBKformModel = this.fb.group({
    
    PfName: ['', [Validators.required, Validators.minLength(4)]],
    PfEmailid: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
    PfComment: ['', [Validators.required, Validators.minLength(10)]]
  });

  feedback() {
    var body = {
      "PfItmid" : localStorage.getItem('FBKItmid'),
      "PfFname" : this.FBKformModel.value.PfName,
      "PfEmail": this.FBKformModel.value.PfEmailid,
      "PfComment": this.FBKformModel.value.PfComment
    };
    
    return this.http.post(this.BaseURI + '/User/SFeedback', body);
  }
  
  UDformModel = this.fb.group({
    
    uVerification: [''],
    uType: ['']
  });

  UAVProfile() {
    var body = {
      "uId" : localStorage.getItem('UDPuId'),
      "uVerification" : this.FBKformModel.value.uVerification,
      "uType": this.FBKformModel.value.uType
    };
    
    return this.http.post(this.BaseURI + '/User/SFeedback', body);
  }

  deleteMovie(id : number){
    return this.http.get(this.BaseURI+'/User/RemoveItem/'+id);
   }

   deleteMLink(id : number){
    return this.http.get(this.BaseURI+'/Movies/RemoveMlocation/'+id);
   }
  
  deleteShow(id : number){
    return this.http.get(this.BaseURI+'/User/RemoveItem/'+id);
  } 

  deleteSLink(id : number){
    return this.http.get(this.BaseURI+'/Shows/RemoveSlocation/'+id);
  } 

  deleteFeedback(id : number){
    return this.http.get(this.BaseURI+'/User/RemoveFeedback/'+id);
  } 

  deleteUser(id : number){
    return this.http.get(this.BaseURI+'/User/RemoveUser/'+id);
  }

  UUType(id:number, utype:string, uname:string, uverification:string) {
    var body = {
      "uId" : id,
      "uType": utype.trim(),
      "uName":uname.trim(),
      "uVerification":uverification.trim()
    };
    //console.log(body);
    return this.http.post(this.BaseURI + '/User/UUType/'+ id, body);
  }

  UUVerify(id:number, uverification:string, uname:string, utype:string ) {
    var body = {
      "uId" : id,
      "uVerification": uverification.trim(),
      "uName":uname.trim(),
      "uType":utype.trim()
    };
    //console.log(body);
    return this.http.post(this.BaseURI + '/User/UUVerify/'+ id, body);
  }
}
