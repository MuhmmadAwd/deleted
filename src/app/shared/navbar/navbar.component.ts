import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { uploadModalService } from 'src/app/_services/upload-modal.service';
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
  uploadFile: any = {};
  modalTitle!: string;
  endpoint!: string;

  @ViewChild('uploadDrugs') uploadDrugs!: ElementRef;
  @ViewChild('uploadPharmacies') uploadPharmacies!: ElementRef;
  @ViewChild('uploadLocations') uploadLocations!: ElementRef;

  constructor(
    public translate: TranslateService,
    public account: AccountService,
    public uploadModal: uploadModalService
  ) {}
  ngOnInit(): void {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    this.currentLang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.currentLang);
    this.getCurrentUser();
  }
  switchLanguage(lang: string) {
    console.log(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
  getCurrentUser() {
    this.account.currentUser$.subscribe(
      (user: User) => {
        this.isLoggedIn = !!user;
        this.user = user;
        this.username = user.data.pharmacyInformation.pharmacyName;
        this.account.username = this.username;
        console.log(user, 'hhhh');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this.account.logout();
    this.isLoggedIn = false;
  }

  setModalTitle1() {
    this.modalTitle = this.uploadDrugs.nativeElement.innerText;
    this.endpoint = 'ImportDrugsInfoAsExcel';
  }
  setModalTitle2() {
    this.modalTitle = this.uploadPharmacies.nativeElement.innerText;
    this.endpoint = 'ImportPharmacysInfoAsExcel';
  }
  setModalTitle3() {
    this.modalTitle = this.uploadLocations.nativeElement.innerText;
    this.endpoint = 'ImportLocationsInfoAsExcel';
  }

  UploadFiles() {
    this.uploadModal.uploadFiles(this.uploadFile, this.endpoint).subscribe(
      (response: any) => {
        console.log(response, this.endpoint );
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
