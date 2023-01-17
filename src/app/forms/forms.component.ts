import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"],
})
export class FormsComponent implements OnInit {
  @ViewChild("myForm") myForm: NgForm;
  defaultCourse = "MEAN";
  username: string = "";
  constructor() {}

  ngOnInit() {}

  onSubmit(myForm: NgForm) {
    console.log(this.myForm);
  }
}
