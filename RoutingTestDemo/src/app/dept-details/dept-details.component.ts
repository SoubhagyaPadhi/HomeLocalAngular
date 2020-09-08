import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent implements OnInit {

  public deptId;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.deptId = id;
  }

}
