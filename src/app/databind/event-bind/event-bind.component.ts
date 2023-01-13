import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-bind",
  templateUrl: "./event-bind.component.html",
  styleUrls: ["./event-bind.component.css"],
})
export class EventBindComponent implements OnInit {
  message: string = "";
  constructor() {}

  ngOnInit() {}

  myClick() {
    this.message = "Product is added to cart successfully";
  }

  onInputClick(event) {
    console.log(event.target.value);
    this.message = event.target.value +" is added to cart successfully";
  

  }

  // / template referance vaiable
  getInfo(event){
    //direct get value no need to add value
    console.log(event.value);
    
  }
}
