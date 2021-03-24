import { Component, OnInit } from '@angular/core';
import {API} from '../../../../../../services/apis-call/api.service';

@Component({
  selector: 'gts-fe-admin-statistical-rubric',
  templateUrl: './admin-statistical-rubric.component.html',
  styleUrls: ['./admin-statistical-rubric.component.scss']
})
export class AdminStatisticalRubricComponent implements OnInit {

  constructor(
      private api: API
  ) { }

  ngOnInit(): void {
  }

}
