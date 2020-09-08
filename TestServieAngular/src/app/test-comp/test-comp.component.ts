import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { Person } from '../person';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  public personArr = [];
  public isTrue = true;
  public errorMessage;
  constructor(private testService:TestServiceService) { }

  ngOnInit(): void {
    this.testService.getData().subscribe(data =>
      {
         if(data.hasOwnProperty("data"))
          {
            var tempArr = data["data"];
            for(let key in tempArr){
              this.personArr.push(tempArr[key]);
            }
          }
          console.log(this.personArr);

      },
      error => this.errorMessage = error);
  }

}
