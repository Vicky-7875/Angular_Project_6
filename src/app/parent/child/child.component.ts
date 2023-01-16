import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  constructor() {}
  @Input() productSelectedChild: boolean = false;
  @Input() selectedProdChild: string = "";
  //  addedProdChild: any;
  @Output() addedProdChild = new EventEmitter<any>();
  // addedProdProperty: any;
  ngOnInit() {}

  // @Input() placeholderText: string = "abc";

  onAddProd() {
    // this.addedProdProperty = this.selectedProdChild;
    this.addedProdChild.emit(this.selectedProdChild);
  }
}
