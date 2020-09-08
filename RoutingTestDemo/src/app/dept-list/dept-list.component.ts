import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept-list',
  template: `
    <p>
      dept-list works!</p>
      <div (click)="onClick(dept)" *ngFor="let dept of deptDetailsList">
        {{dept.id}}-------{{dept.name}}
      </div>
   `,
  styles: [
  ]
})
export class DeptListComponent implements OnInit {

  public deptDetailsList =
  [{"id":1, "name":"Angular"},
  {"id":2, "name":"Node"},
  {"id":3, "name":"Ruby"},
  {"id":4, "name":"Bootstrap"}];
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onClick(dept){
    this.router.navigate(['/dept', dept.id]);
  }

}
