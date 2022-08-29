import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../_services/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model:any = {}
  currentLang!: string;
  constructor(
    public translate: TranslateService,
    public account: AccountService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    this.currentLang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.currentLang);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  login() {
    console.log(this.model);
    this.account.login(this.model).subscribe(
     (response) => {
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
