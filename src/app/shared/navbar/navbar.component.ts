import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UploadFile } from 'src/app/_model/upload-file';
import { UploadExcelFileService } from 'src/app/_services/upload-excel-file.service';
import { User } from '../../_model/user.model';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentLang!: string;
  isLoggedIn!: boolean;
  user!: User;
  username!: any;
  ExcelInfoFile: any = {};
  modalTitle!: string;
  ApiEndPoint!: string;
  constructor(
    public _TranslateService: TranslateService,
    public _AccountService: AccountService,
    public _UploadExcelFileService: UploadExcelFileService
  ) {}

  ngOnInit(): void {
    this._TranslateService.addLangs(['en', 'ar']);
    this._TranslateService.setDefaultLang('en');
    this.currentLang = localStorage.getItem('lang') || 'en';
    this._TranslateService.use(this.currentLang);
    this.getCurrentUser();
  }

  switchLanguage(lang: string) {
    console.log(lang);
    this._TranslateService.use(lang);
    localStorage.setItem('lang', lang);
  }

  getCurrentUser() {
    this._AccountService.currentUser$.subscribe(
      (user: User) => {
        this.isLoggedIn = !!user;
        this.user = user;
        this.username = user.data.pharmacyInformation.pharmacyName;
        this._AccountService.username = this.username;
        console.log(user, 'hhhh');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this._AccountService.logout();
    this.isLoggedIn = false;
  }

  setModalTitle(a: HTMLElement) {
    if (a.innerText.trim() == 'Upload Drugs') {
      this.modalTitle = 'Upload Drugs';
      this.ApiEndPoint = 'ImportDrugsInfoAsExcel';
    } else if (a.innerText.trim() == 'Upload Pharmacies') {
      this.modalTitle = 'Upload Pharmacies';
      this.ApiEndPoint = 'ImportPharmacysInfoAsExcel';
    } else {
      this.modalTitle = 'Upload Location File';
      this.ApiEndPoint = 'ImportLocationsInfoAsExcel';
    }
  }

  UploadFiles() {
    this._UploadExcelFileService
      .UploadDrugInfo(this.ExcelInfoFile, this.ApiEndPoint)
      .subscribe((response) => {
        console.log(response);
      });
  }

  // changeLang(lang: Event){
  //   const langValue = (lang.target as HTMLInputElement).value;
  //   localStorage.setItem('lang',langValue);
  //   window.location.reload();

  // }
}
