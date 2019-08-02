import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpServiceService} from "../shared/http-service.service";

@Component({
  selector: 'app-testsetmatrix2',
  templateUrl: './testsetmatrix2.component.html',
  styleUrls: ['./testsetmatrix2.component.css']
})
export class Testsetmatrix2Component implements OnInit {

  testsetid: string;
  cols: any[];
  resultsSet: any[];
  scriptSet: any[];
  deviceSet: any[];
  rows: any[] = [];
  summary = {};
  selectedResults: any[];

  constructor(private route:ActivatedRoute,
              private httpService: HttpServiceService) { }

  ngOnInit() {
    this.testsetid = this.route.snapshot.params['testsetid'];
    this.httpService.getTestSetMatrix(this.testsetid).subscribe((inData: any) => {
      this.deviceSet = inData['deviceSet'];
      this.resultsSet = inData['results'];
      this.scriptSet = inData['scriptSet'];

      this.cols = [
        { field: 'script_name', header: 'Script' }
      ];

      for(let device of this.deviceSet){
        this.cols.push({field: device['name'], header: device['name']});
      }


      for (let result of this.resultsSet) {
        let test_result = {}
        for (let script of result) {
          for (let script_result of script) {
            test_result['script_name'] = script_result['script'];
            test_result[script_result['devName']] = script_result['status'].toUpperCase();
            test_result[script_result['devName'] + '_passOnData'] = {
              'status': script_result['status'].toUpperCase(),
              'sessionId': script_result['sessionid']
            };
          }
        }
        this.rows.push(test_result);
      }

      this.summary = this.getSummary();

    });
  }

  //gets the number of failed and passed testcases.
  getSummary(){
    let passed = 0;
    let failed = 0;
    let error = 0;
    if( this.rows.length > 0) {
      for (let row of  this.rows) {
        for (let [key, value] of Object.entries(row)) {
          if (value['status'] === 'PASSED') {
            passed++;
          }
          else if (value['status'] === 'FAILED') {
            failed++;
          }
          else if (value['status'] === '-') {
            error++;
          }
        }
      }
    }
    return {'passed':passed, 'failed':failed, 'error':error}
  }

  //passes color to the template.
  getColor(val: string) {

    if (val === 'PASSED'){
      return '#8BC34A';
    }
    else if (val === 'FAILED'){
      return '#FF5252';
    }
  }

}
