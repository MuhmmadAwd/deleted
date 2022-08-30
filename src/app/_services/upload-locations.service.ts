import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadFile } from '../_model/upload-file';
import { ApiService } from './_api.service';

@Injectable({
  providedIn: 'root',
})
export class UploadLocationsService extends ApiService<UploadFile> {
  constructor(protected http: HttpClient) {
    super(http);
  }

  getApiUrl(): string {
    return 'DisplayOrders/ImportLocationsInfoAsExcel';
  }

  UploadLocationsInfo(LocationsInfoFile: UploadFile) {
    return this.post(LocationsInfoFile);
  }
}
