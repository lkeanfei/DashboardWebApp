import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {HttpServiceService} from "../shared/http-service.service";

export interface ReportDetail {
  datetime: string;
  logtype: string;
  logkeys: any;
  logjson: any;
}

@Component({
  selector: 'app-localrunreport',
  templateUrl: './localrunreport.component.html',
  styleUrls: ['./localrunreport.component.css']
})
export class LocalrunreportComponent implements OnInit {

  sessionid: string;
  udid: string;
  status: string;
  start: string;
  end: string;
  device: string;
  script: string;

  dataSource: MatTableDataSource<ReportDetail> = new MatTableDataSource();
  displayedColumns = ['datetime', 'logtype' , 'logkeys' , 'screenshot' ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute ,
              private httpService: HttpServiceService) { }

  ngOnInit() {
    this.sessionid = this.route.snapshot.params['sessionid'];

    this.httpService.getLocalTestReport(this.sessionid).subscribe( data => {
      // data.subscribe(a => console.log(a));
      console.log('finally i am here la ' );
      this.udid = data['udid'];
      this.start = data['start'];
      this.end = data['end'];
      this.device = data['device'];
      this.script = data['script'];
      this.status = data['status']

      this.dataSource.data = data['results'];
    });
  }

}
