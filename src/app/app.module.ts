import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WebsitesServices } from '../websitesServices';
import { MyLookupService } from './my-lookup.service';
import { AppServices } from './appServices';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxButtonModule } from 'devextreme-angular';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SuccessComponent } from './success/success.component';
import { ChartModule } from 'primeng/chart'; // Import the ChartModule
import { NgApexchartsModule } from 'ng-apexcharts'; // Import ApexChartsModule
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { PriceComponent } from './price/price.component';
import { FloatLabelComponent } from './float-label/float-label.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { ListboxModule } from 'primeng/listbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { UsersComponent } from './users/users.component';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NewDealComponent } from './new-deal/new-deal.component';
import { WebsitesComponent } from './websites/websites.component';
import { PrComponent } from './pr/pr.component';
import { appConfig } from './app.config';

const routeConfig: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routeConfig),
    PannerNode,
    BrowserAnimationsModule,
    DropdownModule,
    Component,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    DxButtonModule,
    DropdownModule,
    FormsModule,
    ChartModule,
    NgApexchartsModule,
    ProgressBarModule,
    ToastModule,
    OrderListModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    ListboxModule,
    AutoCompleteModule,
    ComboBoxModule,
    ButtonModule,
    ReactiveFormsModule,
    DropDownListModule,
    DropdownComponent,
    UsersComponent,
    NewDealComponent,
    PrComponent,
    WebsitesComponent,
    FloatLabelComponent,
    PriceComponent,
    SuccessComponent,
  ],
  providers: [AppServices, WebsitesServices, MyLookupService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [AppComponent],
})
export class AppModule {}
