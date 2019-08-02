import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from "../shared/http-service.service";
import {FormControl} from "@angular/forms";
import { AppDateAdapter, APP_DATE_FORMATS} from './date.adapter';
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material";
import {Utils} from "../shared/utils";
import {from} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class HomeComponent implements OnInit {

  checkboxes = [ 'Checkbox 1' , 'Checkbox 2' , 'Checkbox 3' , 'Checkbox 4'];
  data: any;
  versionCyclesMapping :any;
  columns = [];
  columnNames = [];
  columnHeaders = [];
  colorCodes = {};
  qmcversions = ['4.0' , '4.0.1' , '4.0.2'];
  cycles = [];
  fromDateControl : FormControl;
  toDateControl : FormControl;
  selectedQMCVersion: string;
  selectedCycle : string;

  /*fromDateControl = new FormControl(new Date());
  toDateControl = new FormControl(new Date());
  */


  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {

    // -1: Not compatible
    // 0 : No Runs
    // 1 : Pass
    // 2 : Fail
    // 3 : Partially Passed
    this.colorCodes = { '-1' : 'white', '0': 'gray' , '1' : 'green' , '2' : 'red' , '3' : 'yellow'}

    this.httpService.getVersionsCycles().subscribe(arr => {

      for(let data of arr["results"]) {
        this.qmcversions.push(data['versions']);
        this.versionCyclesMapping = arr["results"];
      }

    });
/*
    let toDate = new Date();
    let fromDate = new Date();
    fromDate.setDate(toDate.getDate() - 7);

    this.fromDateControl = new FormControl(fromDate);
    this.toDateControl = new FormControl(toDate);

    let fromDateStr = Utils.GetDateString(fromDate);
    let toDateStr =  Utils.GetDateString(toDate);
*/

    this.httpService.getDevices().subscribe( data => {
      console.log(data);
    })



    this.getDashboard('4.0.1' , 'SL-C1');


  }

  onSelectQMCVersion(selectedQMCVersion) {
    console.log('Selected QMC version ' + selectedQMCVersion);
    let obj = this.versionCyclesMapping.filter( value => value["version"] == selectedQMCVersion);
    console.log(obj);

    this.cycles = [];

    for(let cycle of obj[0]["cycles"]) {
      this.cycles.push(cycle);
    }


  }

  getDashboard(version: string, cycle: string ) {
    this.httpService.getDashboard(version, cycle).subscribe( retResults=> {

      this.columns = [];
      this.columnNames = [];
      this.columnHeaders = [];

      this.data = retResults['results'];


      if ( this.data.length > 0)
      {

        // Frst column will be script
        this.columns.push('script');
        this.columnNames.push('Script');
        this.columnHeaders.push('script');

        let deviceList = Object.keys(this.data[0])

        for(let device of deviceList)
        {
          if(device != 'script')
          {
            this.columns.push(device);
            this.columnNames.push(device);
            this.columnHeaders.push(device);
          }


        }
        console.log(this.data);

      }




    })
  }

  view() {


    console.log(this.selectedQMCVersion + ' ' + this.selectedCycle);

    this.getDashboard(this.selectedQMCVersion , this.selectedCycle);





    //console.log(this.fromDate.value)
  }

}
