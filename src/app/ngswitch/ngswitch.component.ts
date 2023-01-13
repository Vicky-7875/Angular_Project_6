import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngswitch",
  templateUrl: "./ngswitch.component.html",
  styleUrls: ["./ngswitch.component.css"],
})
export class NgswitchComponent implements OnInit {
  selectedProd: string;
  constructor() {}

  ngOnInit() {}
  getproduvalue(val) {
    console.log(val.target.value);
    this.selectedProd = val.target.value;
  }
}
