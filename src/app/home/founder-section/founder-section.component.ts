import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-founder-section',
  templateUrl: './founder-section.component.html',
  styleUrls: ['./founder-section.component.css']
})
export class FounderSectionComponent implements OnInit {
  // founderList:string[]=[
  //   {{"Chairman of the Administrative Board of the Palestinian Arab Medical Association, which represented the Physicians and Pharmacists Syndicate, and a member of the Administrative Board for several sessions" | translate }}
  //   {{"Member of the Palestinian National Council" | translate }}
  //   {{"Vice President of the Palestinian Health Council of the Palestinian Red Crescent" | translate }}
  //   {{"Board member and founder of the Patient Friends Charitable Society" | translate }}
  //   {{"Chairman of the Board of Directors and founder of the Gaza Central Drug Store, the first drug distribution warehouse in the Gaza Strip" | translate }}
  //   {{"Founding member and Chairman of the Board of Directors of the Middle East Laboratories for the Pharmaceutical and Cosmetics Manufacturing Company LLC" | translate }}
  //   {{"Member of the first elected board of directors of the Palestinian Chamber of Commerce, and the winner of the highest votes in those elections" | translate }}
  //   {{"Member of the Board of Directors of Bank of Palestine Ltd" | translate }}
  //   {{"Chairman and founder of the Gaza Central Warehouse Company for Pharmaceuticals and Medical Supplies" | translate }}
  // ]
  currentLang!: string;

  constructor(
    public translate: TranslateService,
  ) {}
  ngOnInit(): void {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    this.currentLang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.currentLang);
  }
  switchLanguage(lang: string) {
    console.log(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

}
