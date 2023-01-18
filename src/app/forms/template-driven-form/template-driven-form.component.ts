import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"],
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild("myForm") myForm: NgForm;
  defaultCourse = "MEAN";
  username: string = "";
  submited: boolean = false;
  genders = [
    { id: 1, gender: "Male" },
    { id: 1, gender: "Female" },
  ];
  defaultGen = "Male";
  formData = {
    username: "",
    email: "",
    course: "",
    gender: "",
  };
  constructor() {}

  ngOnInit() {}

  onSubmit(myForm: NgForm) {
    console.log(this.myForm);
  }

  setUsernmae() {
    // this.myForm.setValue({
    //   userDetail:{
    //     username:'vivek',
    //     email:'vivek@gmail.cmo'
    //   },
    //   course:'Angular',
    //   gender:'Male'
    // })
    this.myForm.form.patchValue({
      userDetail: {
        username: "vivek",
      },
    });
  }

  saveData() {
    this.submited = true;
    this.formData.username = this.myForm.value.userDetail.username;
    this.formData.email = this.myForm.value.userDetail.email;
    this.formData.course = this.myForm.value.course;
    this.formData.gender = this.myForm.value.gender;
    this.myForm.reset();
  }
}
