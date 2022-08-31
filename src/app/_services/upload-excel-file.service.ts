import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadFile } from '../_model/upload-file';
import { ApiService } from './_api.service';

@Injectable({
  providedIn: 'root',
})
export class UploadExcelFileService extends ApiService<UploadFile> {
  constructor(protected http: HttpClient) {
    super(http);
  }

  UploadDrugInfo(ExcelInfoFile: UploadFile, ApiEndPoint: string) {
    this.ApiEndPoint = ApiEndPoint;
    return this.post(ExcelInfoFile);
  }
}
