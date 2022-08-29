import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/_model/user.model';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HeroSectionComponent implements OnInit {
  currentLang!: string;
  Drug!:any;
  username!:any;

  constructor(
    public translate: TranslateService,
    public account: AccountService
  ) {}
  ngOnInit(): void {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    this.currentLang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.currentLang);
    this.username = this.account.username;
  }
  switchLanguage(lang: string) {
    console.log(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }


}
