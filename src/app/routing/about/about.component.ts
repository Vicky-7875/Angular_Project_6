import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  comp1Exist: boolean = true;
  ngOnInit() {}
  myVlaue = "this iss test value";
  value: string;
  txtSearchProduct: string = "";
  myDate = new Date();

  nameList = [
    "sad",
    "sadsadsa b sdasd",
    "sadsadsa c sdasd",
    "sadsadsa d sdasd",
    "sadsa",
    "sadsadsa f sdasd",
  ];

  productList = [
    { name: "sadsadas", price: 12312, availibity: true },
    { name: "tadsadat", price: 12313, availibity: false },
    { name: "uadsadau", price: 12314, availibity: true },
    { name: "vadsadav", price: 12315, availibity: false },
  ];
  submit(val) {
    this.value = val.value;
  }

  addProduct(add) {
    this.productList.push({
      name: add.value,
      price: 13123,
      availibity: true,
    });
    add.value=''
  }

  destroy() {
    this.comp1Exist = false;
  }
}
