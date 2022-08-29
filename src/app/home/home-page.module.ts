import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { CustomersSectionComponent } from './customers-section/customers-section.component';
import { FounderSectionComponent } from './founder-section/founder-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ManagementSectionComponent } from './management-section/management-section.component';
import { OrderNowSectionComponent } from './order-now-section/order-now-section.component';
import { SalesSectionComponent } from './sales-section/sales-section.component';
import { SuccessSectionComponent } from './success-section/success-section.component';
import { ValuesSectionComponent } from './values-section/values-section.component';
import { VisionSectionComponent } from './vision-section/vision-section.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroSectionComponent,
    AboutSectionComponent,
    FounderSectionComponent,
    ManagementSectionComponent,
    VisionSectionComponent,
    ValuesSectionComponent,
    SuccessSectionComponent,
    SalesSectionComponent,
    CustomersSectionComponent,
    ContactSectionComponent,
    OrderNowSectionComponent,
  ],
  exports: [
    HeroSectionComponent,
    AboutSectionComponent,
    FounderSectionComponent,
    ManagementSectionComponent,
    VisionSectionComponent,
    ValuesSectionComponent,
    SuccessSectionComponent,
    SalesSectionComponent,
    CustomersSectionComponent,
    ContactSectionComponent,
    OrderNowSectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class HomePageModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
