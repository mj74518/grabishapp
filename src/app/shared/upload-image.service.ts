import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class UploadImageService {

  constructor(private http : HttpClient, private user: UserService) { }
  
  postFile(uiId: string, fileToUpload: File) {
    var serverpath = this.user.ServerPath();
    const endpoint = serverpath+'/Image/UploadImage/'+ uiId;
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData);
  }

}
