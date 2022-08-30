import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UploadFile } from 'src/app/_model/upload-file';
import { UploadDrugsService } from 'src/app/_services/upload-drugs.service';
import { UploadLocationsService } from 'src/app/_services/upload-locations.service';
import { UploadPharmacysService } from 'src/app/_services/upload-pharmacy.service';
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
  DrugInfoFile: any = {};
  modalTitle!: string;
  endpoint!: string;

  @ViewChild('uploadDrugs') uploadDrugs!: ElementRef;
  @ViewChild('uploadPharmacies') uploadPharmacies!: ElementRef;
  @ViewChild('uploadLocations') uploadLocations!: ElementRef;

  constructor(
    public _TranslateService: TranslateService,
    public _AccountService: AccountService,
    public _UploadDrugsService: UploadDrugsService,
    public _UploadPharmacysService: UploadPharmacysService,
    public _UploadLocationsService: UploadLocationsService
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

  setModalTitle1() {
    this.modalTitle = this.uploadDrugs.nativeElement.innerText;
    // this.endpoint = 'ImportDrugsInfoAsExcel';
  }
  setModalTitle2() {
    this.modalTitle = this.uploadPharmacies.nativeElement.innerText;
    // this.endpoint = 'ImportPharmacysInfoAsExcel';
  }
  setModalTitle3() {
    this.modalTitle = this.uploadLocations.nativeElement.innerText;
    // this.endpoint = 'ImportLocationsInfoAsExcel';
  }

  UploadDrugs() {
    this._UploadDrugsService
      .UploadDrugInfo(this.DrugInfoFile)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  UploadFiles() {
    this.uploadModal.uploadFiles(this.uploadFile, this.endpoint).subscribe(
      (response: any) => {
        console.log(response, this.endpoint);
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

  // changeLang(lang: Event){
  //   const langValue = (lang.target as HTMLInputElement).value;
  //   localStorage.setItem('lang',langValue);
  //   window.location.reload();

  // }
}
