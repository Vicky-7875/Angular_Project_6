import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-class-style",
  templateUrl: "./class-style.component.html",
  styleUrls: ["./class-style.component.css"],
})
export class ClassStyleComponent implements OnInit {
  myPro: boolean = false;
  myStylePro: string = "15px";
  isActive: boolean = true;
  multiClass = {
    class1: true,
    class2: false,
    class3: true,
  };

  myStyle = {
    background: "white ",
    margin: "auto",
    "margin-top": "10px",
    border: "5px solid cyan",
  };
  constructor() {}

  ngOnInit() {}
}
