import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private hostMachine = 'http://10.156.27.207:8000';

  constructor(private httpClient: HttpClient) { }

  getTestSets() {
    return this.httpClient.get(this.hostMachine + '/qmcrest/gettestsets/');
  }

  getDevices() {
    return this.httpClient.get(this.hostMachine + '/qmcrest/getdevices/')
  }

  getTestSetMatrix(testsetid: string) {
    return this.httpClient.get( this.hostMachine + '/qmcrest/testsetmatrix/' + testsetid + '/');
  }

  getLocalTestReport(sessionid: string)
  {
    return this.httpClient.get(this.hostMachine + '/qmcrest/getlocalrunreport/' + sessionid + '/')
  }

  getVersionsCycles() {

    const body = { };
    return this.httpClient.post(this.hostMachine + '/qmcrest/getversionscycles/' , body  )

  }

  // getDashboard( fromDateStr :string, toDateStr: string) {
  //
  //   let header = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   });
  //
  //   console.log("Post " + fromDateStr + " " + toDateStr);
  //
  //
  //   const body = { 'fromdate' : fromDateStr , 'todate' : toDateStr };
  //   return this.httpClient.post(this.hostMachine + '/qmcrest/getdashboard/' , body  )
  // }



  getDashboard( version :string, cycle: string) {

    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });




    const body = { 'version' : version , 'cycle' : cycle };
    return this.httpClient.post(this.hostMachine + '/qmcrest/getdashboard/' , body  )
  }


}
