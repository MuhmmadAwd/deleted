import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { uploadFile } from '../_model/upload-file';
@Injectable({
  providedIn: 'root',
})
export class uploadModalService {
  baseUrl = 'https://localhost:44303/';

  constructor(private http: HttpClient) {}

  uploadFiles(uploadFile: uploadFile, endpoint: string) {
    return this.http.post<uploadFile>(
      this.baseUrl + 'api/DisplayOrders/' + endpoint + '',
      uploadFile,
      {
        headers: new HttpHeaders({
          Authorization:
            ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBZG1pbkBBZG1pbi5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsInBoYXJtYWN5X2lkIjoiNTc3NmZlZGItYzE4OC00MDRmLWFkNDItZWY5NWQzOTgxODRjIiwianRpIjoiMzZhYmU1YmQtMTkxOC00OGU1LWE3YzgtYTEyY2U5ZDc2YTA3IiwiZXhwIjoxNjYxNzIzODU1LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMwMy8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDMwMy8ifQ.VxY9kifC-JPimg8cl1eDg77kYwny-ZLUR63gEqPE-2U',
        }),
      }
    );
  }
}
