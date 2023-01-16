import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
  selectedProd: string;
  productSelected: boolean = false;
  addedProd: any;
  constructor() {}

  ngOnInit() {}
  onSelectProd(prdo) {
    this.productSelected = true;
    this.selectedProd = prdo;
  }

  onParentFunction(prodData) {
    this.addedProd = prodData;
  }
  // myText="vivekssss"
}
