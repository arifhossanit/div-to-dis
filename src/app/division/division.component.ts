import { Component, OnInit } from '@angular/core';
import { DropdownService } from "../services/dropdown.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
 division: any[]=[];
 district: any[]=[];
 error ='';
  constructor(private dropdownService: DropdownService) { }

  ngOnInit(): void {
    this.getDivision()
  }
  getDivision(){
    this.dropdownService.getDiv().subscribe(
      (data:any)=>{this.division = data},
      (err) => {
        console.log(err);
        this.error = err;
      }
      )
  }
  sendDiv(data: NgForm){
    this.dropdownService.getDist(data).subscribe(
      (data:any)=>{this.district = data},
      (err) => {
        console.log(err);
        this.error = err;
      }
    )
    console.log(data);
  }
}
