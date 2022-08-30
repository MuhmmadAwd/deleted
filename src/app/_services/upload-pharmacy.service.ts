import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadFile } from '../_model/upload-file';
import { ApiService } from './_api.service';

@Injectable({
  providedIn: 'root',
})
export class UploadPharmacysService extends ApiService<UploadFile> {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getApiUrl(): string {
    return "DisplayOrders/ImportPharmacysInfoAsExcel";
  }

  UploadPharmacysInfo(PharmacysInfoFile: UploadFile) {
    return this.post(PharmacysInfoFile)
  }
}
