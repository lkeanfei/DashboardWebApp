import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {HttpServiceService} from "../shared/http-service.service";

export interface TestSet {
  testsetid: string;
  desc: string;
  endtime: string;
  starttime: string;
  passCount: string;
  failureCount: string;
  assertErrCount: string;
  nonAssertErrCount: string;
}

@Component({
  selector: 'app-localruns',
  templateUrl: './localruns.component.html',
  styleUrls: ['./localruns.component.css']
})
export class LocalrunsComponent implements OnInit {

  dataSource: MatTableDataSource<TestSet> = new MatTableDataSource();
  displayedColumns = ['testsetid', 'desc', 'starttime', 'endtime' , 'passCount' , 'failureCount' , 'assertErrCount' , 'nonAssertErrCount'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    //this.progressService.start();
    this.httpService.getTestSets().subscribe( data => {
      console.log('Herew!!! ');
      console.log(data['results']);
      const testsetLength = data['results'].length;
      this.dataSource.data = data['results'];
      //this.progressService.done();
    });
  }

}
