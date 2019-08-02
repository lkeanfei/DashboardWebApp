import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpServiceService} from "./shared/http-service.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {
  MatTableModule,
  MatTreeModule,

  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSelectModule, MatChipsModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RootComponent } from './root/root.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LocalrunsComponent } from './localruns/localruns.component';
import { Testsetmatrix2Component } from './testsetmatrix2/testsetmatrix2.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {ChartModule} from "primeng/chart";
import { LocalrunreportComponent } from './localrunreport/localrunreport.component';
import {NgbModule, NgbPopoverModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RootComponent,
    LocalrunsComponent,
    Testsetmatrix2Component,
    LocalrunreportComponent
  ],
  imports: [
    NgbModule,
    MatChipsModule,
    NgbPopoverModule,
  MatTreeModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatCheckboxModule,
    MatDividerModule,
    MatNativeDateModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSelectModule,
    TableModule,
    ButtonModule,
    PanelModule,
    ChartModule
  ],
  providers: [ HttpServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
